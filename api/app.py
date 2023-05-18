from flask import Flask
from config import Config
from apifairy import APIFairy

apifairy = APIFairy()


def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    # extensions
    apifairy.init_app(app)

    return app
