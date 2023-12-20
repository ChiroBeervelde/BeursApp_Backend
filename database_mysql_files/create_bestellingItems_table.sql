CREATE TABLE BestellingItem (
   id INT NOT NULL AUTO_INCREMENT UNIQUE,
    bestellingId INT,
    drankId INT,
    FOREIGN KEY (bestellingId) REFERENCES Bestelling(bestellingId),
    FOREIGN KEY (drankId) REFERENCES dranken(id),
    prijsPerArtikel DECIMAL NOT NULL,
    aantal INT NOT NULL,
    PRIMARY KEY ( id )
);
