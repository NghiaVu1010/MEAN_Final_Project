drop database hca;
create database hca;
use hca;

create table users (
	id		 	int(11) NOT NULL AUTO_INCREMENT, 
	username 	varchar(25) NOT NULL, 
	email 		varchar(25) NOT NULL, 
	password	varchar(25) NOT NULL,
	is_admin	smallint(1) NOT NULL DEFAULT 0,
	createdAt  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updatedAt  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	UNIQUE		UQ_USER_1 (USER_NAME),
	PRIMARY KEY(ID)
);

INSERT INTO users (username, email, password, is_admin) VALUES ('Admin', 'admin@test.com', 'password', 1);

select * from users;
