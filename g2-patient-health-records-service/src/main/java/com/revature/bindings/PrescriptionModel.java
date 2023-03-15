package com.revature.bindings;

import java.time.LocalDate;

import lombok.Data;

@Data
public class PrescriptionModel {
	private int id;
	private String prescriptionName;
	private String dosage;
	private String notes;
	private int visitId;
	private LocalDate pDate;

}
