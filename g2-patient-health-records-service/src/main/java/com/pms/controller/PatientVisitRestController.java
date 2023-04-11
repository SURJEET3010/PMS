package com.pms.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pms.model.PatientVisitDetails;
import com.pms.model.PrescriptionDetails;
import com.pms.model.TestDetails;
import com.pms.service.PatientVisitService;

@RestController
@RequestMapping("/api/v1/visit")
@CrossOrigin(origins = "http://localhost:4200")
public class PatientVisitRestController {
	
	@Autowired
	private PatientVisitService service;

	
	@PostMapping("/{patientId}")
	public ResponseEntity<?> save(@PathVariable String patientId,@RequestBody PatientVisitDetails patientVisit){
	try {
	patientVisit.setPatientId(patientId);
	PatientVisitDetails visit=service.saveVisit(patientVisit);
	return new ResponseEntity<PatientVisitDetails>(visit,HttpStatus.CREATED);
	} catch (Exception e) {
		e.printStackTrace();
	return new ResponseEntity<String>(e.getMessage(), 
	HttpStatus.INTERNAL_SERVER_ERROR);
	}
	}
	
	
	@GetMapping("/allvisits/{patientId}")
	public ResponseEntity<?> getAll(@PathVariable String patientId){
	ResponseEntity<?> resp=null;
	List<PatientVisitDetails> list=service.getAllVisit(patientId);
	if(list==null || list.isEmpty()) {
		String message="No Data Found";
		resp=new ResponseEntity<String>(message,HttpStatus.NO_CONTENT);
		} else {
		resp=new ResponseEntity<List<PatientVisitDetails>>(list,HttpStatus.OK);
		}
		return resp;
	}
	
	@GetMapping("/recent/{patientId}")
	public ResponseEntity<?> getRecentVisit(@PathVariable String patientId){
		PatientVisitDetails pvd = service.getRecentVisitDetails(patientId);
		if(pvd!=null)
			return new ResponseEntity<>(pvd,HttpStatus.OK);
		else
			return new ResponseEntity<String>("Data not found",HttpStatus.BAD_REQUEST);
		
	}
	
	
	
	@PutMapping("/{visitId}")
	public ResponseEntity<?> update(@PathVariable("visitId") String visitId,@RequestBody PatientVisitDetails patientVisit){

	//check for id exist
	if(visitId!=null) {
		PatientVisitDetails updatedVisit= service.updateVisit(visitId,patientVisit);
	return new ResponseEntity<>(updatedVisit,HttpStatus.OK);
	} else {
		//not exist
		return new ResponseEntity<String>("Record not found",HttpStatus.BAD_REQUEST);
		}
	}
	
	@DeleteMapping("/{visitId}")
	public ResponseEntity<?> deleteVisit(@PathVariable String visitId){
		if(visitId!=null) {
		service.deleteVisit(visitId);
		return new ResponseEntity<String>("Visit Deleted",HttpStatus.ACCEPTED);
		}else {
			return new ResponseEntity<String>("VisitId not found",HttpStatus.BAD_REQUEST);
		}
		
	}
	
	
	//============================Test Details==========================================
	
	@PostMapping("/test/{visitId}")
	public ResponseEntity<?> saveTest(@PathVariable("visitId") String visitId,@RequestBody TestDetails test){
		TestDetails status = service.saveTest(visitId, test);
	    return new ResponseEntity<>(status, HttpStatus.CREATED);
	}
	
	@GetMapping("/test/{visitId}")
	public ResponseEntity<?> getAllTests(@PathVariable("visitId") String visitId){
	ResponseEntity<?> resp=null;
	List<TestDetails> tests=service.getAllTests(visitId);
	if(tests==null || tests.isEmpty()) {
		String message="No Data Found";
		resp=new ResponseEntity<String>(message,HttpStatus.NO_CONTENT);
		} else {
		resp=new ResponseEntity<List<TestDetails>>(tests,HttpStatus.OK);
		}
		return resp;
	}
	
	@DeleteMapping("/test/{testId}")
	public ResponseEntity<String> deleteTestById(@PathVariable("testId") String testId)
	{

	if(testId!=null) { 
	//if exist
	service.deleteTest(testId);
	return new ResponseEntity<String>("Deleted test successfully",HttpStatus.ACCEPTED);
	} else {                       //not exist
	return new ResponseEntity<String>("'"+testId+"' does not Exist",HttpStatus.BAD_REQUEST);
	}
	}
	
//	@PutMapping("/test/{testId}")
//	public ResponseEntity<?> updateTest(@PathVariable("testId") String testId,@RequestBody TestDetails test){
//		
//	if(testId!=null) {
//		
//	TestDetails updatedTest=service.updateTest(testId, test);
//	return new ResponseEntity<TestDetails>(updatedTest,HttpStatus.ACCEPTED);
//	
//	} else {
//		
//		return new ResponseEntity<String>("Record not found",HttpStatus.BAD_REQUEST);
//		}
//	}
	
	//========================Prescription Details====================================
	
	@PostMapping("/prescription/{visitId}")
	public ResponseEntity<?> savePrescription(@PathVariable("visitId") String visitId,
														@RequestBody PrescriptionDetails prescribe){
		PrescriptionDetails status = service.savePrescription(visitId, prescribe);

	    return new ResponseEntity<PrescriptionDetails>(status, HttpStatus.CREATED);
	    }
	
	
	@GetMapping("/prescription/{visitId}")
	public ResponseEntity<?> getAllPriscriptions(@PathVariable("visitId") String visitId){
	
	List<PrescriptionDetails> prescriptions =service.getAllPrescriptions(visitId);
	if(prescriptions==null || prescriptions.isEmpty()) {
		String message="No Data Found";
		return new ResponseEntity<String>(message,HttpStatus.NO_CONTENT);
		} else {
		return new ResponseEntity<List<PrescriptionDetails>>(prescriptions,HttpStatus.OK);
		}
	}
}
