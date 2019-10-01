drop database hca;
create database hca;
use hca;

CREATE TABLE users (
	id		 	INT(11) NOT NULL AUTO_INCREMENT, 
	username 	VARCHAR(25) NOT NULL, 
	email 		VARCHAR(25) NOT NULL, 
	password	VARCHAR(25) NOT NULL,
	is_admin	smallint(1) NOT NULL DEFAULT 0,
	createdAt   TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updatedAt   TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	UNIQUE		UQ_USER_1 (USER_NAME),
	PRIMARY KEY(ID)
);

INSERT INTO users (username, email, password, is_admin) VALUES ('Neo', 'Neo@test.com', 'password1', 1);
INSERT INTO users (username, email, password, is_admin) VALUES ('Sara', 'Sara@test.com', 'password2', 0);
INSERT INTO users (username, email, password, is_admin) VALUES ('Steve', 'Steve@test.com', 'password3', 1);
INSERT INTO users (username, email, password, is_admin) VALUES ('Rob', 'Rob@test.com', 'password4', 0);
INSERT INTO users (username, email, password, is_admin) VALUES ('Cate', 'Cate@test.com', 'password5', 1);
INSERT INTO users (username, email, password, is_admin) VALUES ('Cori', 'Cori@test.com', 'password6', 0);

#SELECT * FROM users;
#SELECT * FROM users WHERE is_admin = 0;
#SELECT * FROM users WHERE username = 'Neo' AND password = 'password1';

#SELECT username, email FROM users WHERE id = 1;

#INSERT INTO users (username, email, password, is_admin) VALUES ('Ray', 'Ray@test.com', 'password7', 0);
#SELECT * FROM users;

#UPDATE users SET email = 'Neo@gmail.com' WHERE id = 1;
#SELECT * FROM users;

#DELETE * FROM users WHERE id = 1;
#SELECT * FROM users;