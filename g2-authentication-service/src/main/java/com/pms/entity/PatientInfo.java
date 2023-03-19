package com.pms.entity;

import java.util.List;

import jakarta.annotation.Nonnull;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;




//use database patient_info_db
@Entity
@Data // gives all lombok
@Table(name = "patient")
public class PatientInfo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "patient_id")
	private int patientId;
	@Nonnull
	@Column(name = "email", unique = true)
	private String email;
	private String title;
	@Column(name = "first_name")
	private String firstName;
	@Column(name = "last_name")
	private String lastName;	
	private String dob;
	@Column(name = "contact_number")
	private String contactNumber;
	@Nonnull
	private String password;
	private String gender;
	@Column(name = "languages_known")
	private List<String> languagesKnown;
	private String address;
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

	
	
}