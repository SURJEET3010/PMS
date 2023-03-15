package com.revature.entities;

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
@Table(name="TEST_DETAILS")
@Data
public class TestDetails {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="TEST_ID")
	private int testId;
	@Column(name="TEST_NAME")
	private String testName;
	@Column(name="RESULT")
	private String result;
	@Column(name="NOTES")
	private String notes;
		
	@ManyToOne
	@JoinColumn(name="visit_id")
	private PatientVisitDetails visitDetails;
}
