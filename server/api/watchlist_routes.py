from flask import Blueprint, request, jsonify
from server.models import db, Watchlist

watchlist = Blueprint('watchlist', __name__)

# accepts user id
@watchlist.route('/<id>')
def get_watchlist(id):
    all = Watchlist.query.filter_by(user_id=id)

    return {"watchlist": [item.to_dict() for item in all]}

# accepts user id 
@watchlist.route('/<id>/add', methods=["POST"])
def watchlist_add(id):
    data = request.json
    print(data)
    newEntry = Watchlist(
        user_id=id,
        original_name=data['original_name'],
        name=data['name'],
        vote_count=data['vote_count'],
        backdrop_path=data['backdrop_path'],
        poster_path=data['poster_path'],
        original_language=data['original_language'],
        tmdb_id=data['id'],
        vote_average=data['vote_average'],
        overview=data['overview'],
    )
    try:
        db.session.add(newEntry)
        db.session.commit()
    except:
        return jsonify({"msg": "error occured or data already exists"})

    return jsonify({"msg": "success"})


@watchlist.route('/<watchlistId>/remove', methods=['DELETE'])
def watchlist_remove(watchlistId):
    watchlist_index = Watchlist.query.get(watchlistId)
    if not watchlist_index:
        return jsonify({'message': 'No index found with provided Id'})
    try:
        db.session.delete(watchlist_index)
        db.session.commit()
    except:
        return jsonify({"msg": "error occured or data doesn't exist"})

    return jsonify({'message': 'watchlist index has been deleted!'})
