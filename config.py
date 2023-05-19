import os

from dotenv import load_dotenv

load_dotenv()
basedir = os.path.abspath(os.path.dirname(__file__))


class Config:
    # DB configuration
    ALCHEMICAL_DATABASE_URL = os.environ.get(
        "DATABASE_URL"
    ) or "sqlite:///" + os.path.join(basedir, "wildlife_sightings.sql")

    APIFAIRY_TITLE = "Wildlife Sightings Tracker API"
    APIVERSION = "1.0"
    APIFAIRY_UI = os.environ.get("DOCS_UI", "elements")
