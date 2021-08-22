SET sql_safe_updates = FALSE;

USE defaultdb;
DROP DATABASE IF EXISTS store CASCADE;
CREATE DATABASE IF NOT EXISTS store;

USE store;

CREATE TABLE wares (
    id UUID NOT NULL DEFAULT gen_random_uuid(),
    item STRING,
    aisle INT8,
    PRIMARY KEY (id)
);

INSERT INTO wares (item, aisle) VALUES ('lights', 7);
INSERT INTO wares (item, aisle) VALUES ('car', 6);
INSERT INTO wares (item, aisle) VALUES ('bike', 14);
INSERT INTO wares (item, aisle) VALUES ('microwave', 9);
INSERT INTO wares (item, aisle) VALUES ('garbage bags', 11);
