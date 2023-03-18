package com.revature.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Entity
@Table(name = "physician_availability")
@Data
public class Physician {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "physician_id")
	private int physicianId;
	@NotNull
	private String name;
	@NotNull
	@Column(name = "physician_email", unique = true)
	private String physicianEmail;
	private String department;
	private LocalDateTime date;
	private boolean availability;
	@Column(name = "contact_number")
	private String contactNumber;
	


}
