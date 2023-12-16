create table dranken(
   id INT NOT NULL AUTO_INCREMENT UNIQUE,
   naam VARCHAR(100) NOT NULL UNIQUE,
   huidigePrijs double NOT NULL,
   vorigePrijs double,
   categorie VARCHAR(100),
   alcoholisch boolean,
   kleur VARCHAR(100),
   afbeelding VARCHAR(100), 
   hotkey VARCHAR(100),
   PRIMARY KEY ( id )
);