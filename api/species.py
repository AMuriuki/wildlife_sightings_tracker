from flask import Blueprint, abort
from apifairy import response
from api.decorators import paginated_response
from api.models import Species
from api.schemas import SpeciesSchema
from api.app import db

species = Blueprint("species", __name__)
single_species_schema = SpeciesSchema()
all_species_schema = SpeciesSchema(many=True)


@species.route("/species/<int:id>", methods=["GET"])
@response(single_species_schema)
def get(id):
    """Retrieve a species by ID"""
    return db.session.get(Species, id) or abort(404)


@species.route("/species", methods=["GET"])
@paginated_response(all_species_schema)
def all():
    """Retrieve all animal species"""
    return Species.select()
