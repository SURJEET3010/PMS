package com.revature.entities;

import java.time.LocalDate;
import java.util.List;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "PATIENT_VISIT_DETAILS")
@Data
public class PatientVisitDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "VISIT_ID")
	private int visitId;


	@Column(name = "HEIGHT")
	private float height;

	@Column(name = "WEIGHT")
	private float weight;

	@Column(name = "BP_SYSTOLLIC")
	private int bpSystollic;

	@Column(name = "BP_DIASTOLLIC")
	private int bpDiastolic;

	@Column(name = "BODY_TEMPERATURE")
	private float bodyTemperature;

	@Column(name = "RESPIRATION_RATE")
	private int respirationRate;

	@Column(name = "BLOOD_GROUP")
	private String bloodGroup;

	@Column(name = "NURSE_EMAIL")
	private String nurseEmail;

	@Column(name = "PHYSICIAN_EMAIL")
	private String physicianEmail;
	
	@Column(name = "APPOINTMENT_ID")
	private int appointmentId;
	
	@Column(name = "KEY_NOTES")
	private String keyNotes;
	
	@Column(name = "ALLERGY")
	private List<Integer> allergy;
	
	@OneToMany(mappedBy="visitDetails")
	private Set<TestDetails> testDetails;
	
	@OneToMany(mappedBy="visitDetails")
	private Set<PrescriptionDetails> prescriptionDetails;
	
	@ManyToOne
	@JoinColumn(name="patient_id")
	private PatientDetails patient;
	
	@Column(name = "CREATED_DATE")
	private LocalDate createdDate;
	
	@Column(name = "UPDATED_DATE")
	private LocalDate updatedDate;
	
}
