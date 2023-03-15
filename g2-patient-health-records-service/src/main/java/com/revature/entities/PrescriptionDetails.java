package com.revature.entities;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="PRESCRIPTION_DETAILS")
@Data
public class PrescriptionDetails {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="PRESC_ID")
	private int prescriptionId;
	@Column(name="PRESC_NAME")
	private String prescriptionName;
	@Column(name="DOSAGE")
	private String dosage;
	@Column(name="NOTES")
	private String notes;
	@Column(name="CREATED_DATE")
	private LocalDate pDate;
	
	@ManyToOne
	@JoinColumn(name="visit_id")
	private PatientVisitDetails visitDetails;

}
