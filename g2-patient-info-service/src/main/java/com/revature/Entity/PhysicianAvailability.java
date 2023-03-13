package com.revature.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data // gives all lombok
@Table(name = "Physician_Availability")
@NoArgsConstructor
@AllArgsConstructor
public class PhysicianAvailability {

	@Id
	/* @GeneratedValue(strategy=GenerationType.IDENTITY) */
	@Column(name = "Email")
	private String physicianEmail;

	/* @Column(name = "Date") */
	private String date;

	/* @Column(name = "Availability") */
	private Boolean availability;

	public String getPhysicianEmail() {
		return physicianEmail;
	}

	public void setPhysicianEmail(String physicianEmail) {
		this.physicianEmail = physicianEmail;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public Boolean getAvailability() {
		return availability;
	}

	public void setAvailability(Boolean availability) {
		this.availability = availability;
	}

	@Override
	public String toString() {
		return "PhysicianAvailability [physicianEmail=" + physicianEmail + ", date=" + date + ", availability="
				+ availability + "]";
	}
	
}
