package com.revature.entities;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Data;

@Entity
@Table(name = "PATIENT_VISIT_DETAILS")
@Data
public class PatientVisitDetails implements Serializable {

	private static final long serialVersionUID = 3148327988005359558L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "VISIT_ID")
	@JsonIgnore
	private int visitId;
	
	@Column(name="PATIENT_ID")
	private int patientId;

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
	
	 @Column(name="created_date")
	    @Temporal(TemporalType.DATE)
	    private LocalDate createdDate;
	 
	    @Temporal(TemporalType.DATE)
	    protected LocalDate modifiedDate;
	
//	@OneToMany(mappedBy="visitDetails")
//	private Set<TestDetails> testDetails;
//	
//	@OneToMany(mappedBy="visitDetails")
//	private Set<PrescriptionDetails> prescriptionDetails;
	
//	@ManyToOne
//	@JoinColumn(name="patient_id")
//	private PatientDetails patient;
	
	
}
