from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False, unique=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    profile = db.Column(db.Integer)
    hashed_password = db.Column(db.String(100), nullable=False)

    history = db.relationship("History", back_populates="user")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "profile": self.profile,
            "hashed": self.hashed_password
        }


# HISTORY AND TMDB_HISTORY
class History(db.Model):
    __tablename__ = 'history'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    tmdb_id = db.Column(db.Integer, db.ForeignKey(

        "tmdb_history.id"), nullable=False)

    user = db.relationship("User", back_populates="history")
    tmdb = db.relationship("TMDB_history", back_populates="history")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "tmdb_id": self.tmdb_id,
        }


class TMDB_history(db.Model):
    __tablename__ = 'tmdb_history'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    backdrop = db.Column(db.String(255))
    poster = db.Column(db.String(255))
    original_language = db.Column(db.String(255))
    tmdb_id = db.Column(db.Integer, unique=True)
    vote_average = db.Column(db.Integer)
    overview = db.Column(db.String)

    history = db.relationship("History", back_populates="tmdb")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "backdrop": self.backdrop,
            "poster": self.poster,
            "original_language": self.original_language,
            "tmdb_id": self.tmdb_id,
            "vote_average": self.vote_average,
            "overview": self.overview,
        }


# WATCHLIST
class Watchlist(db.Model):
    __tablename__ = 'watchlists'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    name = db.Column(db.String(255), unique=True)
    backdrop = db.Column(db.String(255))
    poster = db.Column(db.String(255))
    original_language = db.Column(db.String(255))
    tmdb_id = db.Column(db.Integer)
    vote_average = db.Column(db.Integer)
    overview = db.Column(db.String)

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "name": self.name,
            "backdrop": self.backdrop,
            "poster": self.poster,
            "original_language": self.original_language,
            "tmdb_id": self.tmdb_id,
            "vote_average": self.vote_average,
            "overview": self.overview,
        }


# profiles
class Profile(db.Model):
    __tablename__ = 'profiles'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    name = db.Column(db.String, unique=True)
    src = db.Column(db.String)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "src": self.src,

        }
