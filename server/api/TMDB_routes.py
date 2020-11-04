from flask import Blueprint, request, jsonify


TMDB = Blueprint('tmdb', __name__)


@TMDB.route('/')
def netflix_originals():

  return jsonify({"msg": "hello"})
