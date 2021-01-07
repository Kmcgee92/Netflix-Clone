from flask import Blueprint, request, jsonify
from sqlalchemy import update
from server.models import db, User, Profile
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import (
    JWTManager, jwt_required, create_access_token,
    jwt_refresh_token_required, create_refresh_token,
    get_jwt_identity, set_access_cookies,
    set_refresh_cookies, unset_jwt_cookies, jwt_optional, config
)

user = Blueprint('users', __name__)

# test route


@user.route('/')
def index():
    response = User.query.all()
    return {"users": [user.to_dict() for user in response]}


@user.route('/login', methods=["POST"])
def login():
    email = request.json.get('email', None)
    password = request.json.get('password', None)
    errors = {}
    if not email:
        errors["email"] = "no email provided."
    if not password:
        errors["password"] = "no password provided."
    if len(errors) > 0:
        # print(errors)
        return jsonify({"error": errors})

    try:
        response = User.query.filter_by(email=email).first()
        loggedInUser = response.to_dict()
    except:
        return jsonify({"error": "no one found with those credentials"})
    # print("="*1000)
    # print(loggedInUser)

    if not loggedInUser:
        return jsonify({'error': 'email is not valid'})

    if check_password_hash(loggedInUser['hashed'], password):
        # Create the tokens we will be sending back to the user
        access_token = create_access_token(identity=email)
        refresh_token = create_refresh_token(identity=email)
        # Set the JWT cookies in the response
        resp = jsonify(
            {'login': True,
             "access_token": access_token,
             "refresh_token": refresh_token,
             **loggedInUser
             }
        )
        set_access_cookies(resp, access_token)
        set_refresh_cookies(resp, refresh_token)
        return resp

    return jsonify({"error": "password is incorrect"})


@user.route('/signup', methods=["POST"])
def signup():
    name = request.json.get('name', None)
    email = request.json.get('email', None)
    profile = request.json.get('profile', 1)
    password = request.json.get('password', None)
    errors = {}
    if not name:
        errors["name"] = "Your forgot your name!"
    if not email:
        errors["email"] = "We need an email."
    if not password:
        errors["password"] = "no password provided."
    if len(errors) > 0:
        print(errors)
        return errors

    hashed_pass = generate_password_hash(password, method='sha256')
    new_user = User(
        name=name,
        email=email,
        profile=profile,
        hashed_password=hashed_pass
    )
    db.session.add(new_user)
    db.session.commit()

    # Create the tokens we will be sending back to the user
    access_token = create_access_token(identity=email)
    refresh_token = create_refresh_token(identity=email)
    new_user = new_user.to_dict()
    # Set the JWT cookies in the response
    resp = jsonify(
        {'login': True,
         "access_token": access_token,
         "refresh_token": refresh_token,
         **new_user
         })
    set_access_cookies(resp, access_token)
    set_refresh_cookies(resp, refresh_token)
    return resp, 200

# NESTED PROFILE ROUTES MOUNTED ON USER ROUTES


@user.route('/profiles/<id>')
def profiles(id):
    try:
        response = Profile.query.filter_by(user_id=id)
    except:
        return jsonify({"error": "something failed"})

    return {"profiles": [profile.to_dict() for profile in response]}


@user.route('/profiles/<id>/update/<profileId>', methods=['PUT'])
def profiles_update(id, profileId):
    try:
        queriedUser = User.query.filter_by(id=id).first()
    except:
        return jsonify({"error": "something failed"})
    queriedUser.profile = profileId
    db.session.commit()
    userData = queriedUser.to_dict()
    return jsonify({"profile": userData["profile"]})



@user.route('/profiles/delete/<profileId>', methods=['DELETE'])
def delete_profile(profileId):
    print(profileId)
    return "hello"
    pass


# persistant sessions
@ user.route('/token/refresh', methods=['POST'])
@jwt_optional
def refresh():
    try:
        email = get_jwt_identity()
    except:
        return {}, 401

    if not email:
        return jsonify({"msg": "no current user"}), 202

    try:
        access_token = create_access_token(identity=email)
        response = User.query.filter_by(email=email).first()
    except:
        return {}, 401
    # Set the JWT access cookie in the response
    currentUser = response.to_dict()
    resp = jsonify({'refresh': True, **currentUser})
    set_access_cookies(resp, access_token)
    return resp


@user.route('/token/remove', methods=['POST'])
@jwt_required
def logout():
    resp = jsonify({'logout': True})
    unset_jwt_cookies(resp)
    return resp
