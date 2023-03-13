package com.revature.bindings;

import java.time.LocalDate;
import java.util.List;

import lombok.Data;

@Data
public class PatientVisitModel {
	private int visitId;
	private int patientId;
	private float height;
	private float weight;
	private int bpSystollic;
	private int bpDiastolic;
	private float bodyTemperature;
	private int respirationRate;
	private String bloodGroup;
	private String nurseEmail;
	private String physicianEmail;
	private int appointmentId;
	private String keyNotes;
	private List<Integer> allergy;
	LocalDate createdDate;
	LocalDate updatedDate;
	
	
	
}
