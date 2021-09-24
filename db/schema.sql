CREATE DATABASE tamagochi;
\c tamagochi;

CREATE TABLE treats(
  id SERIAL PRIMARY KEY,
  treatName TEXT, 
  details TEXT,
  hunger INTEGER,
  thirst INTEGER
);


CREATE TABLE statusBar(
  id SERIAL PRIMARY KEY,
  petId TEXT,
  hunger INTEGER,
  thirst INTEGER
);

DROP TABLE statusBar;
DROP treats;

INSERT INTO treats(treatName, details, hunger, thirst) VALUES ('Cookie', 'A cookie is a baked or cooked snack or dessert that is typically small, flat and sweet. It usually contains flour, sugar, egg, and some type of oil, fat, or butter', 5, 0);