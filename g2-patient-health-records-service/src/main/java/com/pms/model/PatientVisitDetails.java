package com.pms.model;


import java.time.LocalDate;
import java.util.List;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Builder;
import lombok.Data;

@EntityListeners(LastUpdateListener.class)
@Entity
@Table(name = "PATIENT_VISIT_DETAILS")
@Data
@Builder
public class PatientVisitDetails {

	@Id
	@GeneratedValue(generator = CustomIdGenerator.GENERATOR_NAME)
	@GenericGenerator(name = CustomIdGenerator.GENERATOR_NAME, 
	strategy = "com.pms.model.CustomIdGenerator",
	parameters = {@Parameter(name = CustomIdGenerator.PREFIX_PARAM, value = "VI") })
	@Column(name="VISIT_ID")
	private String visitId;
	
	@Column(name="PATIENT_ID",nullable = false, updatable = false)
	private String patientId;

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

//	@Column(name = "NURSE_EMAIL")
//	private String nurseEmail;
//
//	@Column(name = "PHYSICIAN_EMAIL")
//	private String physicianEmail;
	
	
	@Column(name = "APPOINTMENT_ID", updatable = false)
	private String appointmentId;
	

	@Column(name = "KEY_NOTES")
	private String keyNotes;
	
	
	@Column(name = "ALLERGY")
	private List<String> allergy;
	
	@CreatedDate
	@Column(nullable = false, updatable = false)
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	public LocalDate createdDate;

	@LastModifiedDate
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	public LocalDate lastModifiedDate;
	
	public PatientVisitDetails() {
		super();
	}
	

	public PatientVisitDetails(String visitId, String patientId, float height, float weight, int bpSystollic,
			int bpDiastolic, float bodyTemperature, int respirationRate, String bloodGroup, String appointmentId,
			String keyNotes, List<String> allergy, LocalDate createdDate, LocalDate lastModifiedDate) {
		super();
		this.visitId = visitId;
		this.patientId = patientId;
		this.height = height;
		this.weight = weight;
		this.bpSystollic = bpSystollic;
		this.bpDiastolic = bpDiastolic;
		this.bodyTemperature = bodyTemperature;
		this.respirationRate = respirationRate;
		this.bloodGroup = bloodGroup;
		this.appointmentId = appointmentId;
		this.keyNotes = keyNotes;
		this.allergy = allergy;
		this.createdDate = createdDate;
		this.lastModifiedDate = lastModifiedDate;
	}
	
	
	
	
	
}
