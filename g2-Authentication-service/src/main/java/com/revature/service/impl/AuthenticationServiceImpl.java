package com.revature.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.entity.PatientInfo;
import com.revature.repository.PatientRepo;
import com.revature.service.AuthenticationService;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {
	@Autowired
	private PatientRepo patientRepo;

	@Override
	public boolean register(PatientInfo patientInfo) {
		String str = patientRepo.existsById(patientInfo.getEmail());
		if (str == null) {
			System.out.println(str);
			patientRepo.save(patientInfo);
			return true;
		} else {
			return false;
		}

	}

	@Override
	public boolean login(PatientInfo patientinfo) {
		String username = patientRepo.existsById(patientinfo.getEmail());
		String password = patientRepo.existsByPassword(patientinfo.getEmail());

		if (patientinfo.getEmail().equals(username) && patientinfo.getPassword().equals(password)) {
			return true;
		} else {
			return false;
		}

	}

}
