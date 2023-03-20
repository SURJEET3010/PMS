package com.revature.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "physician_availability")
@NoArgsConstructor
@AllArgsConstructor
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
	@Column(name = "start_date")
	private String startDate;
	@Column(name = "end_date")
	private String endDate;
	private boolean availability;
	@Column(name = "contact_number")
	private String contactNumber;
	


}
