from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  name = db.Column(db.String(40), nullable=False, unique=False)
  email = db.Column(db.String(255), nullable = False, unique = True)
  pic = db.Column(db.Integer)
  hashed_password = db.Column(db.String(100), nullable=False)

  def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "email": self.email,
      "pic": self.pic,
      "hashed_password": self.hashed_password
    }
