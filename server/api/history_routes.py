from flask import Blueprint, request, jsonify
from sqlalchemy import exc
from server.models import db, History, TMDB_history


history = Blueprint('history', __name__)

# accepts user id


@history.route('/<id>')
def get_history(id):
  # n+1 query
    all_history = History.query.filter_by(user_id=id)
    list = [item.tmdb for item in all_history]
    return {"list": [item.to_dict() for item in list]}

# accepts user id


@history.route('/<id>/add', methods=["POST"])
def history_add(id):
    # add tmdb data from request.json use id to add to join table
    data = request.json
    # query and or add data then add tmdb_id to history
    existing_row = TMDB_history.query.filter_by(name=data['name'])
    TMDB_historyId = [value.id for value in existing_row]

    # no TMDB_history present add row and then add history
    if not TMDB_historyId:
        newInsert = TMDB_history(
            name=data['name'],
            backdrop=data['backdrop'],
            poster=data['poster'],
            original_language=data['original_language'],
            tmdb_id=data['id'],
            vote_average=data['vote_average'],
            overview=data['overview']
        )
        db.session.add(newInsert)
        db.session.commit

        # add history row with userid and tmdb_history id
        new_TMDB_historyid = [item.id for item in existing_row]
        new_history_insert = History(user_id=id, tmdb_id=new_TMDB_historyid[0])
        db.session.add(new_history_insert)
        db.session.commit()

        return {"new_data": [item.to_dict() for item in existing_row]}

    # skip adding to TMDB_history and add straight to History
    history_insert = History(user_id=id, tmdb_id=TMDB_historyId[0])
    db.session.add(history_insert)
    db.session.commit()

    # return jsonify({'msg': 'added data to history'})
    return {"historyInsert": [item.to_dict() for item in existing_row]}

# accepts user id


@history.route('/<id>/clear', methods=["DELETE"])
def history_clear(id):
    # delete all records of history for user
    try:
        all_history_records = History.query.filter_by(user_id=id)
    except:
        return jsonify({"msg": "provided id is not a valid user"})
    if not len([items for items in all_history_records]):
        return jsonify({"msg": "no history to remove!"})

    for record in all_history_records:
        try:
            db.session.delete(record)
        except:
            return jsonify({"msg": "an error occured while deleting records"})
    db.session.commit()

    return jsonify({"msg": "all records have been removed"})


# BONUS possibly create a restore table and use as backup
# @history.route('/<id>/restore')
# def history_restore(id):
#   print("stretch goal: restore")
#   print(id)
#   return ''

# try:

# except exc.SQLAlchemyError as e:
#     return {"type": type(e)}
