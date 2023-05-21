import os

from dotenv import load_dotenv

load_dotenv()
basedir = os.path.abspath(os.path.dirname(__file__))


def as_bool(value):
    if value:
        return value.lower() in ["true", "yes", "on", "1"]
    return False


class Config:
    # DB configuration
    ALCHEMICAL_DATABASE_URL = os.environ.get(
        "DATABASE_URL"
    ) or "sqlite:///" + os.path.join(basedir, "wildlife_sightings.sqlite")

    # security options
    USE_CORS = as_bool(os.environ.get("USE_CORS") or "yes")
    CORS_SUPPORTS_CREDENTIALS = True

    # API Documentation
    APIFAIRY_TITLE = "Wildlife Sightings Tracker API"
    APIFAIRY_VERSION = "1.0"
    APIFAIRY_UI = os.environ.get("DOCS_UI", "elements")
