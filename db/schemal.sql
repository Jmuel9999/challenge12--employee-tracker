DROP DATABASE IF EXISTS employee_tracker;

CREATE DATABASE employee_tracker;

CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30 NOT NULL)
);

CREATE TABLE role (
    id AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30), NOT NULL ,
    salary DECIMAL, NOT NULL,
    department_id INT
);