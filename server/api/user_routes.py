from flask import Blueprint, jsonify
from server.models import User

user = Blueprint('users', __name__)


@user.route('/')
def index():
  response = User.query.all()
  return { "users": [user.to_dict() for user in response]}


@user.route('/login')
def login():
  print("working")
  return {"hello"}


@user.route('/logout')
def logout():
  print("working")
  pass


@user.route('/signup')
def signup():
  print("working")
  pass
