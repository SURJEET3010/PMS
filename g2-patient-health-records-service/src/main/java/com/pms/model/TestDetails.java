package com.pms.model;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.hibernate.annotations.Parameter;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import lombok.Builder;
import lombok.Data;

@Entity
@Table(name="TEST_DETAILS")
@Data
@Builder
public class TestDetails {

	@Id
	@GeneratedValue(generator = CustomIdGenerator.GENERATOR_NAME)
	@GenericGenerator(name = CustomIdGenerator.GENERATOR_NAME, 
	strategy = "com.pms.model.CustomIdGenerator",
	parameters = {@Parameter(name = CustomIdGenerator.PREFIX_PARAM, value = "TD00") })
	@Column(name="TEST_ID")
	private String testId;
	
	@NotBlank
	@Column(name="TEST_NAME")
	private String testName;
	
	@NotBlank
	@Column(name="RESULT")
	private String result;
	
	@Column(name="NOTES")
	private String notes;
	
	@ManyToOne(fetch=FetchType.LAZY,optional=false)
	@JoinColumn(name="visit_id",nullable=false)
	@OnDelete(action=OnDeleteAction.CASCADE)
	@JsonIgnore
	private PatientVisitDetails visitDetails;
	

	public TestDetails(String testId, String testName, String result, String notes, PatientVisitDetails visitDetails) {
		super();
		this.testId = testId;
		this.testName = testName;
		this.result = result;
		this.notes = notes;
		this.visitDetails = visitDetails;
	}


	public TestDetails() {
		super();
	}


	public TestDetails(String testId,  String testName, String result, String notes) {
		super();
		this.testId = testId;
		this.testName = testName;
		this.result = result;
		this.notes = notes;
	}


	

	
	
	
	
//	@Column(name = "test_date")
//    @Temporal(TemporalType.DATE)
//    private LocalDate testDate;

		

}
