package com.revature.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.entities.PatientDetails;
import com.revature.repositories.PatientRepo;


@Service
public class RegisterService {
	@Autowired
	private PatientRepo patientRepo;
	
	
	public boolean register(PatientDetails patientDetails) {
		String str = patientRepo.existsById(patientDetails.getEmail());
		if(str==null) {
			System.out.println(str);
			patientRepo.save(patientDetails);
			return true;
		}
		else {
			return false;		
		}		
		
	}
	
	
	public List<PatientDetails> viewAllPatient(){
		List<PatientDetails> findAll = patientRepo.findAll();
		
		
		return findAll;
		
	}
	
	
	
	public boolean login(PatientDetails patientDetails) {
		String username = patientRepo.existsById(patientDetails.getEmail());
		String password = patientRepo.existsByPassword(patientDetails.getEmail());

		if(patientDetails.getEmail().equals(username) && patientDetails.getPassword().equals(password)) {
			return true;
		}
		else {
			return false;		
		}		
		
	}

}
