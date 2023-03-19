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
@Table(name="TEST_DETAILS")
@Data
public class TestDetails implements Serializable {
	
	private static final long serialVersionUID = 3297969268115426338L;

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
	
	@Column(name="visit_id")
	private int visitId;
	
//	@Column(name = "test_date")
//    @Temporal(TemporalType.DATE)
//    private LocalDate testDate;

		
//	@ManyToOne
//	@JoinColumn(name="visit_id")
//	private PatientVisitDetails visitDetails;
}
