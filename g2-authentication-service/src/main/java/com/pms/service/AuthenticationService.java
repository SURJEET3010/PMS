package com.pms.service;

import com.pms.entity.PatientInfo;

public interface AuthenticationService {

	public abstract boolean register(PatientInfo patientInfo);
	public abstract boolean login(PatientInfo patientInfo);
}
