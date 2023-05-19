from apifairy.decorators import other_responses
from flask import Blueprint
from apifairy import authenticate, body, response
from api.decorators import paginated_response
from api.models import Sighting
from api.schemas import SightingSchema

sightings = Blueprint("sightings", __name__)
sighting_schema = SightingSchema()
sightings_schema = SightingSchema(many=True)


@sightings.route("/sightings", methods=["GET"])
@paginated_response(sightings_schema)
def all():
    """Retrieve all sightings"""
    return Sighting.select()
