package com.revature.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="ALLERGY")
@Data
public class Allergy {
	
	@Id
	@GeneratedValue
	@Column(name="ALLERGY_ID")
	private Integer allergyId;
	@Column(name="ALLERGY_NAME")
	private String allergyName;
	@Column(name="NOTES")
	private String notes;
	
	
	
	public Allergy() {
		super();
	}
	public Allergy(Integer allergyId, String allergyName, String notes) {
		super();
		this.allergyId = allergyId;
		this.allergyName = allergyName;
		this.notes = notes;
	}
	public Integer getAllergyId() {
		return allergyId;
	}
	public void setAllergyId(Integer allergyId) {
		this.allergyId = allergyId;
	}
	public String getAllergyName() {
		return allergyName;
	}
	public void setAllergyName(String allergyName) {
		this.allergyName = allergyName;
	}
	public String getNotes() {
		return notes;
	}
	public void setNotes(String notes) {
		this.notes = notes;
	}
	
	

}
