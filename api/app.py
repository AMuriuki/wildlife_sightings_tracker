from flask import Flask, redirect, url_for, request
from alchemical.flask import Alchemical
from flask_migrate import Migrate
from flask_marshmallow import Marshmallow
from apifairy import APIFairy
from config import Config

db = Alchemical()
migrate = Migrate()
ma = Marshmallow()
apifairy = APIFairy()


def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    # extensions
    from api import models

    db.init_app(app)
    migrate.init_app(app, db)
    ma.init_app(app)
    apifairy.init_app(app)

    from api.dummy import dummy

    app.register_blueprint(dummy)

    from api.sightings import sightings

    app.register_blueprint(sightings, url_prefix='/api')

    @app.route("/")
    def index():
        return redirect(url_for("apifairy.docs"))

    return app
