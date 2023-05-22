from api import ma
from api.models import Sighting, Species
from marshmallow import validates_schema, ValidationError

paginated_schema_cache = {}


class SpeciesSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Species
        ordered = True

    id = ma.auto_field(dump_only=True)
    url = ma.String(dump_only=True)
    title = ma.String(dump_only=True)


class SightingSchema(ma.SQLAlchemySchema):
    class Meta:
        model = Sighting
        ordered = True

    id = ma.auto_field(dump_only=True)
    url = ma.String(dump_only=True)
    last_seen = ma.auto_field(dump_only=True)
    image = ma.String(dump_only=True)
    species = ma.Nested(SpeciesSchema, dump_only=True)


class StringPaginationSchema(ma.Schema):
    class Meta:
        ordered = True

    limit = ma.Integer()
    offset = ma.Integer()
    after = ma.String(load_only=True)
    count = ma.Integer(dump_only=True)
    total = ma.Integer(dump_only=True)

    @validates_schema
    def validate_schema(self, data, **kwargs):
        if data.get("offset") is not None and data.get("after") is not None:
            raise ValidationError("Cannot specify both offset and after")


def PaginatedCollection(schema, pagination_schema=StringPaginationSchema):
    if schema in paginated_schema_cache:
        return paginated_schema_cache[schema]

    class PaginatedSchema(ma.Schema):
        class Meta:
            ordered = True

        pagination = ma.Nested(pagination_schema)
        data = ma.Nested(schema, many=True)

    PaginatedSchema.__name__ = "Paginated{}".format(schema.__class__.__name__)
    paginated_schema_cache[schema] = PaginatedSchema
    return PaginatedSchema
