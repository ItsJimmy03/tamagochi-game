CREATE DATABASE tamagochi;
\c tamagochi;

CREATE TABLE treats(
  id SERIAL PRIMARY KEY,
  name TEXT
);

CREATE TABLE statusBar(
  id SERIAL PRIMARY KEY,
  name TEXT,
  hunger INTEGER,
  thirst INTEGER
);