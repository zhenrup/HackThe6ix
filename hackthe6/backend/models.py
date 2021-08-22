from sqlalchemy import Column, Integer, String
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import declarative_base

Base = declarative_base()

class Ware(Base):
    __tablename__ = 'wares'
    id = Column(UUID(as_uuid=True), primary_key=True)
    item = Column(String)
    aisle = Column(Integer)
    