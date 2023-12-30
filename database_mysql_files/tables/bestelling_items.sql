CREATE TABLE IF NOT EXISTS bestelling_items (
    id INT NOT NULL AUTO_INCREMENT UNIQUE,
    bestellingId INT,
    drankId INT,
    prijsPerArtikel double NOT NULL,
    aantal INT NOT NULL,
    PRIMARY KEY ( id ),
    FOREIGN KEY (bestellingId) REFERENCES bestellingen(id),
    FOREIGN KEY (drankId) REFERENCES dranken(id)
);
