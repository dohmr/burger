CREATE DATABASE burgers_db;

CREATE TABLE burgers(
    id INTEGER AUTO_INCREMENT,
    burger_name varchar(30),
    devoured BOOLEAN default false
)

