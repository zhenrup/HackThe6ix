from argparse import ArgumentParser
from math import floor
import os
import random
import uuid

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy_cockroachdb import run_transaction

from models import Ware

class DBFunc():
    def __init__(self, connString):
        self.conn_string = connString
        self.engine = self.__initDB__()

    def __searchItem__ (self, session, itemName):
        source = session.query(Ware).filter(Ware.item == itemName).first()
        if source == None:
            return None
        else:
            return (source.item, source.aisle)
    def findAisle (self, itemName):
        item = run_transaction(sessionmaker(bind=self.engine), lambda s: self.__searchItem__(s, itemName))
        if item == None:
            return -1
        else:
            return item[1]

    def __initDB__(self):
        try:
            db_uri = os.path.expandvars(self.conn_string)


            # if not opt.no_init:
            print("Initializing the wares database...")
            print(db_uri)
            os.system('cockroach sql --url {0} -f dbinit.sql'.format(db_uri));
            print("Database initialized.")

            psycopg_uri = db_uri.replace('postgresql://', 'cockroachdb://').replace('postgres://', 'cockroachdb://').replace('26257?', '26257/store?')

            engine = create_engine(psycopg_uri)
            return engine   
        except Exception as e:
            print('Failed to connect to database.')
            print('{0}'.format(e))