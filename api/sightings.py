from apifairy.decorators import other_responses
from flask import Blueprint

from api.models import Sighting

sightings = Blueprint("sightings", __name__)


@sightings.route("/sightings", methods=["GET"])
def all():
    """Retrieve all sightings"""
    return Sighting.select()
