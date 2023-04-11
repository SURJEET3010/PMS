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
@Table(name="PRESCRIPTION_DETAILS")
@Data
@Builder
public class PrescriptionDetails {

	@Id
	@GeneratedValue(generator = CustomIdGenerator.GENERATOR_NAME)
	@GenericGenerator(name = CustomIdGenerator.GENERATOR_NAME, 
	strategy = "com.pms.model.CustomIdGenerator",
	parameters = {@Parameter(name = CustomIdGenerator.PREFIX_PARAM, value = "PR00") })
	@Column(name="PRESC_ID")
	private String prescriptionId;
	
	@NotBlank
	@Column(name="PRESC_NAME")
	private String prescriptionName;
	
	@NotBlank
	@Column(name="DOSAGE")
	private String dosage;
	
	@NotBlank
	@Column(name="NOTES")
	private String notes;
	
//	@Column(name = "prescribed_date")
//	@Temporal(TemporalType.DATE)
//	private LocalDate prescribedDate;
	
//	@Column(name="visit_id")
//	private String visitId;
	
	@ManyToOne(fetch=FetchType.LAZY,optional=false)
	@JoinColumn(name="visit_id",nullable=false)
	@OnDelete(action=OnDeleteAction.CASCADE)
	@JsonIgnore
	private PatientVisitDetails visitDetails;

	public PrescriptionDetails(String prescriptionId, String prescriptionName, String dosage,
			String notes, PatientVisitDetails visitDetails) {
		super();
		this.prescriptionId = prescriptionId;
		this.prescriptionName = prescriptionName;
		this.dosage = dosage;
		this.notes = notes;
		this.visitDetails = visitDetails;
	}
	
	

	public PrescriptionDetails() {
		super();
	}



	public PrescriptionDetails(String prescriptionId, String prescriptionName, String dosage,
			 String notes) {
		super();
		this.prescriptionId = prescriptionId;
		this.prescriptionName = prescriptionName;
		this.dosage = dosage;
		this.notes = notes;
	}


	
	
	


}
