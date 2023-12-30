create or alter table beursapp_settings(
   id INT NOT NULL AUTO_INCREMENT UNIQUE,
   beurs_refresh_timer int,
   prijs_interval double,
   beurs_crash_timed boolean,
   beurs_crash_timer int,
   beurs_crash_probability int
  PRIMARY KEY ( id )
);