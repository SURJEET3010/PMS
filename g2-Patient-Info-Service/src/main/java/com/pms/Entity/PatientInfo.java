package com.pms.Entity;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;




//use database patient_info_db
@Entity
@Data // gives all lombok
@Table(name = "patient")
@NoArgsConstructor
@AllArgsConstructor
public class PatientInfo {

	@Id
	private int Id;
	private String email;
	private String title;
	private String firstName;
	private String lastName;
	private String dob;
	private String contactNumber;
	private String password;
	private String gender;
	private List<String> languagesKnown;
	private String address;
	
	public int getId() {
		return Id;
	}
	public void setId(int id) {
		Id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getContactNumber() {
		return contactNumber;
	}
	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public List<String> getLanguagesKnown() {
		return languagesKnown;
	}
	public void setLanguagesKnown(List<String> languagesKnown) {
		this.languagesKnown = languagesKnown;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	@Override
	public String toString() {
		return "PatientInfo [Id=" + Id + ", email=" + email + ", title=" + title + ", firstName=" + firstName
				+ ", lastName=" + lastName + ", dob=" + dob + ", contactNumber=" + contactNumber + ", password="
				+ password + ", gender=" + gender + ", languagesKnown=" + languagesKnown + ", address=" + address + "]";
	}
	
	
}