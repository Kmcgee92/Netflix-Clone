from flask import Blueprint

watchlist = Blueprint('watchlist', __name__)


@watchlist.route('/<id>')
def get_history(id):
  print(id)
  pass


@watchlist.route('/<id>/add')
def history_add(id):
  print(id)
  pass


@watchlist.route('/<id>/remove')
def history_clear(id):
  print(id)
  pass
