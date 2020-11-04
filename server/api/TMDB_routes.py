from flask import Blueprint, request, jsonify
import requests

TMDB = Blueprint('tmdb', __name__)


@TMDB.route('/nexflix-originals')
def nexlix_originals():
    res = requests.get(
        "https://api.themoviedb.org/3/discover/tv?api_key=98ea7c966f729f7aa57bbca65c46fa73&with_networks=213")
    return jsonify(res.json())
