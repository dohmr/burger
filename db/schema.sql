DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    burger_name varchar(30),
    devoured BOOLEAN default false
);

