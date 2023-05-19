from datetime import datetime
from api.app import db
from sqlalchemy import orm as so
import sqlalchemy as sa
from flask import url_for


class Sighting(db.Model):
    __tablename__ = "sightings"

    id: so.Mapped[int] = so.mapped_column(primary_key=True)
    last_seen: so.Mapped[datetime] = so.mapped_column()
    species_id: so.Mapped[int] = so.mapped_column(
        sa.ForeignKey("species.id"), index=True
    )
    species: so.Mapped["Species"] = so.relationship(back_populates="sightings")

    def __repr__(self):
        return "<Sighting {}>".format(self.species)

    @property
    def url(self):
        return url_for("sightings.get", id=self.id)


class Species(db.Model):
    id: so.Mapped[int] = so.mapped_column(primary_key=True)
    title: so.Mapped[str] = so.mapped_column(sa.String(120), index=True, unique=True)
    sightings: so.WriteOnlyMapped["Sighting"] = so.relationship(
        back_populates="species"
    )

    def __repr__(self):
        return "<Species {}>".format(self.title)

    @property
    def url(self):
        return url_for("species.get", id=self.id)
