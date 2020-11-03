from flask import Blueprint

history = Blueprint('history', __name__)


@history.route('/<id>')
def get_history(id):
  print(id)
  pass


@history.route('/<id>/add')
def history_add(id):
  print(id)
  pass


@history.route('/<id>/clear')
def history_clear(id):
  print(id)
  pass
