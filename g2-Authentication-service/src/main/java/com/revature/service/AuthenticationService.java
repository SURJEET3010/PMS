package com.revature.service;

import com.revature.entity.PatientInfo;

public interface AuthenticationService {

	public abstract boolean register(PatientInfo patientInfo);
	public abstract boolean login(PatientInfo patientInfo);
}
