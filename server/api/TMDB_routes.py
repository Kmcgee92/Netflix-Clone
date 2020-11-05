from flask import Blueprint, request, jsonify
import requests
import os

TMDB = Blueprint('tmdb', __name__)

TMDB_API_KEY = os.environ.get("TMDB_API_KEY")
TMDB_BASE_URL = os.environ.get("TMDB_BASE_URL")

@TMDB.route('/nexflix-originals')
def nexlix_originals():
    res = requests.get(
        f"{TMDB_BASE_URL}/discover/tv?api_key={TMDB_API_KEY}&with_networks=213")
    return jsonify(res.json())


@TMDB.route('/trending')
def trending():
    res = requests.get(
        f"{TMDB_BASE_URL}/trending/all/week?api_key={TMDB_API_KEY}&language=en-US")
    return jsonify(res.json())


@TMDB.route('/top-rated')
def top_rated():
    res = requests.get(
        f"{TMDB_BASE_URL}/movie/top_rated?api_key={TMDB_API_KEY}&language=en-US")
    return jsonify(res.json())


@TMDB.route('/action-movies')
def action_movies():
    res = requests.get(
        f"{TMDB_BASE_URL}/discover/movie?api_key={TMDB_API_KEY}&with_genres=28")
    return jsonify(res.json())


@TMDB.route('/comedy-movies')
def comedy_movies():
    res = requests.get(
        f"{TMDB_BASE_URL}/discover/movie?api_key={TMDB_API_KEY}&with_genres=35")
    return jsonify(res.json())


@TMDB.route('/horror-movies')
def horror_movies():
    res = requests.get(
        f"{TMDB_BASE_URL}/discover/movie?api_key={TMDB_API_KEY}&with_genres=27")
    return jsonify(res.json())


@TMDB.route('/romance-movies')
def romance_movies():
    res = requests.get(
        f"{TMDB_BASE_URL}/discover/movie?api_key={TMDB_API_KEY}&with_genres=10749")
    return jsonify(res.json())


@TMDB.route('/fantasy')
def fantasy():
    res = requests.get(
        f"{TMDB_BASE_URL}/discover/movie?api_key={TMDB_API_KEY}&with_genres=14&include_video=true&page=2&language=en-US")
    return jsonify(res.json())
