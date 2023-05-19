from datetime import datetime
from api.app import db
from sqlalchemy import orm as so
import sqlalchemy as sa


class Sighting(db.Model):
    __tablename__ = "sightings"

    id: so.Mapped[int] = so.mapped_column(primary_key=True)
    last_seen: so.Mapped[datetime] = so.mapped_column()
    species_id: so.Mapped[int] = so.mapped_column(
        sa.ForeignKey("species.id"), index=True
    )
    species: so.Mapped["Species"] = so.relationship(back_populates="sightings")


class Species(db.Model):
    id: so.Mapped[int] = so.mapped_column(primary_key=True)
    title: so.Mapped[str] = so.mapped_column(sa.String(120), index=True, unique=True)
    sightings: so.WriteOnlyMapped["Sighting"] = so.relationship(
        back_populates="species"
    )
    animals: so.WriteOnlyMapped["Animal"] = so.relationship(back_populates="species")


class Animal(db.Model):
    __tablename__ = "animals"

    id: so.Mapped[int] = so.mapped_column(primary_key=True)
    name: so.Mapped[str] = so.mapped_column(sa.String(120), index=True, unique=True)
    species_id: so.Mapped[int] = so.mapped_column(
        sa.ForeignKey("species.id"), index=True
    )
    species: so.Mapped["Species"] = so.relationship(back_populates="animals")
