package com.pms.Entity;

import jakarta.persistence.Entity;



import jakarta.persistence.*;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

	
@Entity
@Data // gives all lombok
@Table(name = "appointment")
@NoArgsConstructor
@AllArgsConstructor
public class Appointment {

	@Id
	private Long appointmentId;
	private String reason;
	private String appointmentDate;
	private String acceptance;
	private int patientId;
	private String physicianEmail;
	private String submissionDate;
	
	
	public long getAppointmentId() {
		return appointmentId;
	}
	public void setAppointmentId(long appointmentId) {
		this.appointmentId = appointmentId;
	}
	public String getReason() {
		return reason;
	}
	public void setReason(String reason) {
		this.reason = reason;
	}
	public String getDate() {
		return appointmentDate;
	}
	public void setDate(String date) {
		this.appointmentDate = date;
	}
	public String getAcceptance() {
		return acceptance;
	}
	public void setAcceptance(String acceptance) {
		this.acceptance = acceptance;
	}
	public int getPatientId() {
		return patientId;
	}
	public void setPatientId(int patientId) {
		this.patientId = patientId;
	}
	public String getPhysicianEmail() {
		return physicianEmail;
	}
	public void setPhysicianEmail(String physicianEmail) {
		this.physicianEmail = physicianEmail;
	}
	public String getSubmissionDate() {
		return submissionDate;
	}
	public void setSubmissionDate(String submissionDate) {
		this.submissionDate = submissionDate;
	}
	@Override
	public String toString() {
		return "Appointment [appointmentId=" + appointmentId + ", reason=" + reason + ", date=" + appointmentDate + ", acceptance="
				+ acceptance + ", patientId=" + patientId + ", physicianEmail=" + physicianEmail + ", submissionDate="
				+ submissionDate + "]";
	}
	
	
	
	
}
