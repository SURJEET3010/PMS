package com.revature.entities;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import lombok.Data;

@Entity
@Table(name="PRESCRIPTION_DETAILS")
@Data
public class PrescriptionDetails implements Serializable {
	
	private static final long serialVersionUID = 2027136609014658252L;

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
	
//	@Column(name = "prescribed_date")
//	@Temporal(TemporalType.DATE)
//	private LocalDate prescribedDate;
	
	@Column(name="visit_id")
	private int visitId;
	
//	@ManyToOne
//	@JoinColumn(name="visit_id")
//	private PatientVisitDetails visitDetails;

}
