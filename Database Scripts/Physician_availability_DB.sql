

create database physician_availability_db;

create table physician_availability
(
physician_id int,
physician_email varchar(50) primary key,
date varchar(10),
availability boolean
);