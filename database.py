from werkzeug.security import generate_password_hash
from server.models import User, History, TMDB_history
from server import app, db
from dotenv import load_dotenv
load_dotenv()


with app.app_context():
    db.drop_all()
    db.create_all()

    testUser = User(
        name='Nexflix user',
        email='testUser@test.io',
        hashed_password=generate_password_hash("password"),
        pic=1
    )
    tmdbFirstIndex = TMDB_history(
        original_name="Lucifer",
        name="Lucifer",
        vote_count=6076,
        backdrop_path="/ta5oblpMlEcIPIS2YGcq9XEkWK2.jpg",
        poster_path="/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg",
        original_language="en",
        tmdb_id=63174,
        vote_average=8.5,
        overview="Bored and unhappy as the Lord of Hell, Lucifer Morningstar abandoned his throne and retired to Los Angeles, where he has teamed up with LAPD detective Chloe Decker to take down criminals. But the longer he's away from the underworld, the greater the threat that the worst of humanity could escape.",
    )

    testUserHistory = History(
        user_id=1,
        tmdb_id=1
    )

    db.session.add(testUser)
    db.session.add(testUserHistory)
    db.session.add(tmdbFirstIndex)

    db.session.commit()
