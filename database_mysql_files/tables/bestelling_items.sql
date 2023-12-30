create or alter table bestelling_items (
    id INT NOT NULL AUTO_INCREMENT UNIQUE,
    bestellingId INT,
    drankId INT,
    prijsPerArtikel DECIMAL NOT NULL,
    aantal INT NOT NULL,
    PRIMARY KEY ( id ),
    FOREIGN KEY (bestellingId) REFERENCES Bestelling(bestellingId),
    FOREIGN KEY (drankId) REFERENCES dranken(id),
);
