from dotenv import load_dotenv
load_dotenv()

from server import app, db
from server.models import User

with app.app_context():
  db.drop_all()
  db.create_all()

  testUser = User(username = 'TestUser', email = 'testUser@kaseymcgee.io')

  db.session.add(testUser)


  db.session.commit()