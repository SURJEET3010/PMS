package com.revature.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "allergy")
public class Allergy {
	
	@Id
	private int id;
	@Column(name = "allergy_name")
	private String allergyName;
	private String notes;
	
	
	
	
	
	public Allergy() {
		super();
	}
	public Allergy(int id, String allergyName, String notes) {
		super();
		this.id = id;
		this.allergyName = allergyName;
		this.notes = notes;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
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
