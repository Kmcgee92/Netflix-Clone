from werkzeug.security import generate_password_hash
from server.models import User
from server import app, db
from dotenv import load_dotenv
load_dotenv()


with app.app_context():
    db.drop_all()
    db.create_all()

    testUser = User(
        name='Nexflix user',
        email='testUser@test.io',
        hashed_password=generate_password_hash("password")
    )

    db.session.add(testUser)

    db.session.commit()
