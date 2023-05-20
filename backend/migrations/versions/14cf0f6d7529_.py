"""empty message

Revision ID: 14cf0f6d7529
Revises: 23bb8c2a8c65
Create Date: 2023-05-19 10:52:16.453889

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '14cf0f6d7529'
down_revision = '23bb8c2a8c65'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('animals', schema=None) as batch_op:
        batch_op.drop_index('ix_animals_name')
        batch_op.drop_index('ix_animals_species_id')

    op.drop_table('animals')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('animals',
    sa.Column('id', sa.INTEGER(), nullable=False),
    sa.Column('name', sa.VARCHAR(length=120), nullable=False),
    sa.Column('species_id', sa.INTEGER(), nullable=False),
    sa.ForeignKeyConstraint(['species_id'], ['species.id'], name='fk_animals_species_id_species'),
    sa.PrimaryKeyConstraint('id', name='pk_animals')
    )
    with op.batch_alter_table('animals', schema=None) as batch_op:
        batch_op.create_index('ix_animals_species_id', ['species_id'], unique=False)
        batch_op.create_index('ix_animals_name', ['name'], unique=False)

    # ### end Alembic commands ###