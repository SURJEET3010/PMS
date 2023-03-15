create database appointment_db;
use appointment_db;
drop table appointment;
create table appointment
(
appointment_id int primary key,
appointment_reason varchar(300),
appointment_date varchar(10),
appointment_acceptance varchar(10) default 'pending',
patient_id int,
physician_email varchar(50),
submission_date varchar(10)
);
