package com.revature.bindings;

import lombok.Data;

@Data
public class PatientDetailsModel {
	
	private int pId;

	private String email;
	
	private String firstName;
	
	private String lastName;
	
	private String dob;
	
	private String contactNumber;
	
	private String password;
	
	private String gender;
	
	private String languageKnown;
	
	private String address;
}
