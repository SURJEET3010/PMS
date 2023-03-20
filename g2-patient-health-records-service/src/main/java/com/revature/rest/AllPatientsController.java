package com.revature.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.revature.entities.PatientVisitDetails;
import com.revature.service.PatientVisitService;
@RequestMapping("/visit")
public class AllPatientsController {
	
	@Autowired
	PatientVisitService service;
	
	@GetMapping
	public ResponseEntity<List<PatientVisitDetails>> viewDetails(){
		List<PatientVisitDetails> patientVisit=service.getAllVisit();
		return new ResponseEntity<>(patientVisit,HttpStatus.OK);
	}
	
	
	

}
