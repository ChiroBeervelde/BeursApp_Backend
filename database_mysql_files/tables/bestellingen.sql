create or alter table bestellingen (
    id INT NOT NULL AUTO_INCREMENT UNIQUE,
    bestelDatum DATETIME NOT NULL,
    PRIMARY KEY ( id )
);