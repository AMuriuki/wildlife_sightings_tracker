from flask import Flask, redirect, url_for
from config import Config
from apifairy import APIFairy
from alchemical.flask import Alchemical
from flask_migrate import Migrate

apifairy = APIFairy()
migrate = Migrate()
db = Alchemical()


def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    # extensions
    db.init_app(app)
    migrate.init_app(app)
    apifairy.init_app(app)

    @app.route("/")
    def index():
        return redirect(url_for("apifairy.docs"))

    return app
