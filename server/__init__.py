import os
from flask import Flask, render_template, request, session
from flask_cors import CORS
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_jwt_extended import JWTManager


from server.models import db, User
from server.api import user, watchlist, history, TMDB


from server.config import Config

app = Flask(__name__)

app.config.from_object(Config)

# setup jwt config
app.config['JWT_TOKEN_LOCATION'] = ['cookies']
app.config['JWT_COOKIE_CSRF_PROTECT'] = False


app.register_blueprint(user, url_prefix='/api/users')
app.register_blueprint(watchlist, url_prefix='/api/watchlist')
app.register_blueprint(history, url_prefix='/api/history')
app.register_blueprint(TMDB, url_prefix='/api/TMDB')
db.init_app(app)
jwt = JWTManager(app)

# Application Security
CORS(app)


@app.after_request
def inject_csrf_token(response):
    response.set_cookie('csrf_token',
                        generate_csrf(),
                        secure=True if os.environ.get('FLASK_ENV') else False,
                        samesite='Strict' if os.environ.get(
                            'FLASK_ENV') else None,
                        httponly=True)
    return response


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    print("path", path)
    if path == 'favicon.ico':
        return app.send_static_file('favicon.ico')
    return app.send_static_file('index.html')
