from apifairy.decorators import other_responses
from flask import Blueprint, abort
from apifairy import authenticate, body, response
from api.decorators import paginated_response
from api.models import Sighting, Species
from api.schemas import SightingSchema
from api.app import db

sightings = Blueprint("sightings", __name__)
sighting_schema = SightingSchema()
sightings_schema = SightingSchema(many=True)


@sightings.route("/sighting/<int:id>", methods=["GET"])
@response(sighting_schema)
def get(id):
    """Retrieve a sighting by id"""
    return db.session.get(Sighting, id) or abort(404)


@sightings.route("/sightings", methods=["GET"])
@paginated_response(sightings_schema)
def all():
    """Retrieve all sightings"""
    return Sighting.select()


@sightings.route("/sightings/<int:species_id>", methods=["GET"])
@paginated_response(
    sighting_schema, order_by=Sighting.last_seen, order_direction="desc"
)
def get_by_species(species_id):
    """Retrieves sightings by species"""
    species = db.session.get(Species, species_id) or abort(404)
    return species.sightings.select()
