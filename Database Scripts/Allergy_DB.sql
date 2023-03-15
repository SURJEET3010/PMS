create database allergy_database;

create table allergy 
(
allergy_id int primary key,
allergy_name varchar(50),
allergy_notes text(10000)
);