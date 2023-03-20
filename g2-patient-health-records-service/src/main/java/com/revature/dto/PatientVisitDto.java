package com.revature.dto;

import lombok.Data;

@Data
public class PatientVisitDto {
	
	private int patientId;
	private float height;
	private float weight;
	private int BPsystolic;
	private int BPdiastolic;
	private float bodyTemperature;
	private int repirationRate;
	private String bloodGroup;
	private String nurseEmail;
	private String physicianEmail;
	private String keyNotes;
	private int appointmentId;

}
