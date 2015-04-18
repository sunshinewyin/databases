CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  ID int(11) NOT NULL auto_increment,
  USERNAME VARCHAR(32) NOT NULL,
  MSGTEXT TEXT NOT NULL,
  ROOMNAME VARCHAR(32) NOT NULL,
  PRIMARY KEY (ID)
  /* Describe your table here.*/
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

