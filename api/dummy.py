from datetime import datetime, timedelta
import random
from flask import Blueprint, current_app
import os
import json
import logging

from api.models import Sighting, Species
from api.app import db

dummy = Blueprint("dummy", __name__)

SITE_ROOT = os.path.realpath(os.path.dirname(__file__))

year = 2022  # specifiy desired year

start_date = datetime(year, 1, 1)
end_date = datetime(year + 1, 1, 1) - timedelta(seconds=1)


def random_date():
    return start_date + (end_date - start_date) * random.random()


@dummy.cli.command()
def load_data():
    json_file = os.path.join(SITE_ROOT, "dummy.json")
    data = json.load(open(json_file))
    species = data["species"]
    sightings = data["sightings"]
    for item in species:
        if not db.session.get(Species, item["id"]):
            species = Species(title=item["title"])
            db.session.add(species)

    for item in sightings:
        if not db.session.get(Sighting, item["id"]):
            sighting = Sighting(species_id=item["species_id"], last_seen=random_date())
            db.session.add(sighting)

    db.session.commit()
    current_app.logger.info("Dummy data added")
    return data
