create database patient_db;
use patient_db;

create table patient
(
patient_id int primary key,
email varchar(50) not null unique key,
title varchar(3),
first_name varchar(20),
last_name varchar(20),
dob varchar(10),
contact_number varchar(10),
password varchar(50),
gender varchar(10),
address varchar(150)
);

create table patient_visit
(
patient_visit_id int primary key,
patient_id int,
pateint_height float,
pateint_weight float,
body_temperature float,
respiration_rate int,
blood_group varchar(3),
blood_pressure_systolic int,
blood_pressure_diastolic int,
key_notes varchar(50),
nurse_email varchar(50),
physician_email varchar(50),
appointment_id int,
allergy_id int,
FOREIGN KEY (allergy_id) REFERENCES allergy(allergy_id),
FOREIGN KEY (patient_id) REFERENCES patient(patient_id)
);

create table diagnosis
(
diagnosis_id int,
diagnosis_name varchar(100),
diagnosis_result varchar(100),
diagnosis_report varchar(100),
patient_visit_id int,
FOREIGN KEY (patient_visit_id) REFERENCES patient_visit(patient_visit_id)
);

create table medication
(
medication_id int,
medication_name varchar(50),
dosage varchar(10),
medication_report varchar(100),
patient_visit_id int,
FOREIGN KEY (patient_visit_id) REFERENCES patient_visit(patient_visit_id) 
);