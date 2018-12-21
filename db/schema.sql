DROP DATABASE IF EXISTS burger;

CREATE DATABASE burger;

USE burger;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT,
    burger_name VARCHAR(50),
    devoured BOOLEAN,
    date TIMESTAMP,
    PRIMARY KEY(id)
);


