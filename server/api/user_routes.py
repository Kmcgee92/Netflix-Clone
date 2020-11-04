from flask import Blueprint, request, jsonify
from server.models import db, User
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


@user.route('/login')
def login():
    email = request.json.get('email', None)
    password = request.json.get('password', None)
    errors = {}
    if not email:
        errors["email"] = "no email provided."
    if not password:
        errors["password"] = "no password provided."
    if len(errors) > 0:
        print(errors)
        return errors

    response = User.query.filter_by(email=email)
    hashed_password = [item.hashed_password for item in response]

    if not len([details for details in response]):
        return jsonify({'message': 'email is incorrect'})

    if check_password_hash(hashed_password[0], password):
        # Create the tokens we will be sending back to the user
        access_token = create_access_token(identity=email)
        refresh_token = create_refresh_token(identity=email)
        # Set the JWT cookies in the response
        resp = jsonify(
            {'login': True,
             "access_token": access_token,
             "refresh_token": refresh_token}
        )
        set_access_cookies(resp, access_token)
        set_refresh_cookies(resp, refresh_token)
        return resp

    return jsonify({"message": "password's dont match"})


@user.route('/signup', methods=["POST"])
def signup():
    name = request.json.get('name', None)
    email = request.json.get('email', None)
    pic = request.json.get('pic', 1)
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
        pic=pic,
        hashed_password=hashed_pass
    )
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"msg": "account successfully created!"})

# persistant sessions


@ user.route('/token/refresh', methods=['POST'])
@ jwt_optional
def refresh():
    email = get_jwt_identity()
    if not email:
        return {}, 400

    access_token = create_access_token(identity=email)
    response = User.query.filter_by(email=email).first()
    # Set the JWT access cookie in the response
    currentUser = response.to_dict()
    resp = jsonify({'refresh': True, **currentUser})
    set_access_cookies(resp, access_token)
    return resp


@user.route('/token/remove', methods=['POST'])
def logout():
    resp = jsonify({'logout': True})
    unset_jwt_cookies(resp)
    return resp
