CREATE DATABASE scavenger_hunt;
\c scavenger_hunt

CREATE TABLE treasures(
    id SERIAL PRIMARY KEY,
    name TEXT,
    clue TEXT,
    address TEXT
);

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT,
    password_digest TEXT
);