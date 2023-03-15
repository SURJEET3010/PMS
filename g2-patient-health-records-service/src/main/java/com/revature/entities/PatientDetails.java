package com.revature.entities;

import java.util.Set;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="PATIENT_DETAILS")
@Data
public class PatientDetails {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name ="PATIENT_ID")
	private int patientId;
	
	@Column(name="EMAIL")
	private String email;
	
	@Column(name="TITLE")
	private String title;
	
	@Column(name="FIRST_NAME")
	private String firstName;
	
	@Column(name="LAST_NAME")
	private String lastName;
	
	@Column(name="DOB")
	private String dob;
	
	@Column(name="CONTACT_NUMBER")
	private String contactNumber;
	
	@Column(name="PASSWORD")
	private String password;
	
	@Column(name="GENDER")
	private String gender;
		
	@Column(name="ADDRESS")
	private String address;
	
	@OneToMany(mappedBy="patient")
	private Set<PatientVisitDetails> patientVisitDetails;
	
	
}
