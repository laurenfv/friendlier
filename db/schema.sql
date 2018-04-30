CREATE DATABASE friendlier_db;
USE friendlier_db;

CREATE TABLE random_acts
(
	id int NOT NULL AUTO_INCREMENT,
	act_name varchar(255) NOT NULL,
	done BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);