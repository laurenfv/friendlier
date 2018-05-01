USE heroku_795fa8d6925eaa0;

DROP TABLE IF EXISTS random_acts;
CREATE TABLE random_acts
(
	id int NOT NULL AUTO_INCREMENT,
	act_name varchar(255) NOT NULL,
	done BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);