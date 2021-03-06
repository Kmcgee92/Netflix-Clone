from werkzeug.security import generate_password_hash
from server.models import User, Profile, History, TMDB_history
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
        profile=1
    )
    tmdbFirstIndex = TMDB_history(
        name="Lucifer",
        backdrop="/ta5oblpMlEcIPIS2YGcq9XEkWK2.jpg",
        poster="/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg",
        original_language="en",
        tmdb_id=63174,
        vote_average=8.5,
        overview="Bored and unhappy as the Lord of Hell, Lucifer Morningstar abandoned his throne and retired to Los Angeles, where he has teamed up with LAPD detective Chloe Decker to take down criminals. But the longer he's away from the underworld, the greater the threat that the worst of humanity could escape.",
    )

    testUserProfile1 = Profile(
        user_id=1,
        name="Kasey",
        src="https://kmcgee92myawsbucket.s3-us-west-2.amazonaws.com/nexflix-profiles/profile7.png",
    )
    testUserProfile2 = Profile(
        user_id=1,
        name="Makayla",
        src="https://kmcgee92myawsbucket.s3-us-west-2.amazonaws.com/nexflix-profiles/profile3.png",
    )
    testUserProfile3 = Profile(
        user_id=1,
        name="Mom",
        src="https://kmcgee92myawsbucket.s3-us-west-2.amazonaws.com/nexflix-profiles/profile6.png",
    )
    testUserProfile4 = Profile(
        user_id=1,
        name="Jaycee",
        src="https://kmcgee92myawsbucket.s3-us-west-2.amazonaws.com/nexflix-profiles/profile4.png",
    )
    testUserProfile5 = Profile(
        user_id=1,
        name="Bubba",
        src="https://kmcgee92myawsbucket.s3-us-west-2.amazonaws.com/nexflix-profiles/profile2.png",
    )

    testUserHistory = History(
        user_id=1,
        tmdb_id=1
    )

    db.session.add(testUser)
    db.session.add(testUserHistory)
    db.session.add(tmdbFirstIndex)

    db.session.commit()
    # add profiles
    db.session.add(testUserProfile1)
    db.session.add(testUserProfile2)
    db.session.add(testUserProfile3)
    db.session.add(testUserProfile4)
    db.session.add(testUserProfile5)

    db.session.commit()
