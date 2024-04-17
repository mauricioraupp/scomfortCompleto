	CREATE DATABASE scomfort_db;
    USE scomfort_db;
    
    CREATE TABLE newsletter(
		name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE
	);