package com.revature.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "physician_availability")
public class Physician {

	@Id
	@Column(name = "physician_email")
	private String physicianEmail;
	private LocalDateTime date;
	private boolean availability;

	public String getPhysicianEmail() {
		return physicianEmail;
	}

	public void setPhysicianEmail(String physicianEmail) {
		this.physicianEmail = physicianEmail;
	}

	public LocalDateTime getDate() {
		return date;
	}

	public void setDate(LocalDateTime date) {
		this.date = date;
	}

	public boolean isAvailability() {
		return availability;
	}

	public void setAvailability(boolean availability) {
		this.availability = availability;
	}

	public Physician(String physicianEmail, LocalDateTime date, boolean availability) {
		super();
		this.physicianEmail = physicianEmail;
		this.date = date;
		this.availability = availability;
	}

	public Physician() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Physician [physicianEmail=" + physicianEmail + ", date=" + date + ", availability=" + availability
				+ "]";
	}

}
