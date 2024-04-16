CREATE DATABASE db_tasks;
USE db_tasks;

CREATE TABLE tasks(
	id INT auto_increment PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    created_at timestamp default current_timestamp
);
