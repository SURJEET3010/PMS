package com.revature.rest;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.entities.PatientVisitDetails;
import com.revature.entities.PrescriptionDetails;
import com.revature.entities.TestDetails;
import com.revature.service.PatientVisitService;

@RestController
@RequestMapping("/visit/{patientId}")
public class PatientVisitRestController {
	
	@Autowired
	private PatientVisitService service;
	
	@PostMapping
	public ResponseEntity<String> save(@PathVariable("patientId") int patientId,@RequestBody PatientVisitDetails patientVisit){
	ResponseEntity<String> resp=null;
	try {
	patientVisit.setPatientId(patientId);
	Integer id=service.saveVisit(patientVisit);
	resp=new ResponseEntity<String>("Patient visit '"+id+"' created", HttpStatus.OK);
	} catch (Exception e) {
	resp=new ResponseEntity<String>(e.getMessage(), 
	HttpStatus.INTERNAL_SERVER_ERROR);
	e.printStackTrace();
	}
	return resp;
	}
	
	
	@GetMapping
	public ResponseEntity<?> getAll(){
	ResponseEntity<?> resp=null;
	List<PatientVisitDetails> list=service.getAllVisit();
	if(list==null || list.isEmpty()) {
		String message="No Data Found";
		resp=new ResponseEntity<String>(message,HttpStatus.NO_CONTENT);
		} else {
		resp=new ResponseEntity<List<PatientVisitDetails>>(list,HttpStatus.OK);
		}
		return resp;
	}
	
	@GetMapping("/{visitId}")
	public ResponseEntity<?> getSingleVisit(@PathVariable int visitId){
		ResponseEntity<?> resp=null;
		Optional<PatientVisitDetails> pvd = service.getOneVisit(visitId);
		if(pvd.get()== null)
			resp= new ResponseEntity<String>("Data Not found",HttpStatus.NOT_FOUND);
		else
		resp= new ResponseEntity<>(pvd,HttpStatus.FOUND);
		
		return resp;
	}
	
	@DeleteMapping("/{visitId}")
	public ResponseEntity<String> deleteById(@PathVariable Integer visitId)
	{
	ResponseEntity<String> resp=null;
	//check for exist
	boolean present=service.isVisitPresent(visitId);
	if(present) { 
	//if exist
	service.deleteVisit(visitId);
	resp=new ResponseEntity<String>("Deleted '"+visitId+"' successfully",HttpStatus.ACCEPTED);
	} else { //not exist
	resp=new ResponseEntity<String>("'"+visitId+"' does not Exist",HttpStatus.BAD_REQUEST);
	}
	return resp;
	}
	
	
	@PutMapping("/{visitId}")
	public ResponseEntity<String> update(@PathVariable("visitId") int visitId,@RequestBody PatientVisitDetails patientVisit){
	ResponseEntity<String> resp=null;
	//check for id exist
	boolean present=service.isVisitPresent(visitId);
	if(present) { //if exist
	patientVisit.setVisitId(visitId);
	service.updateVisit(patientVisit);
	resp=new ResponseEntity<String>("Updated Successfully",HttpStatus.OK);
	} else {
		//not exist
		resp=new ResponseEntity<String>("Record '"+patientVisit.getVisitId()+" ' not found",HttpStatus.BAD_REQUEST);
		}
		return resp;
	}
	
	
	//============================Test Details==========================================
	
	@PostMapping("/test/{visitId}")
	public ResponseEntity<String> saveTest(@PathVariable("visitId") int visitId,@RequestBody TestDetails test){
	ResponseEntity<String> resp=null;
	try {
	test.setVisitId(visitId);
	String name=service.saveTest(test);
	resp=new ResponseEntity<String>("Test '"+name+"' created", HttpStatus.OK);
	} catch (Exception e) {
	resp=new ResponseEntity<String>(e.getMessage(), 
	HttpStatus.INTERNAL_SERVER_ERROR);
	e.printStackTrace();
	}
	return resp;
	}
	
	@GetMapping("/test")
	public ResponseEntity<?> getAllTests(){
	ResponseEntity<?> resp=null;
	List<TestDetails> tests=service.getAllTests();
	if(tests==null || tests.isEmpty()) {
		String message="No Data Found";
		resp=new ResponseEntity<String>(message,HttpStatus.NO_CONTENT);
		} else {
		resp=new ResponseEntity<List<TestDetails>>(tests,HttpStatus.OK);
		}
		return resp;
	}
	
	@GetMapping("/test/{testId}")
	public ResponseEntity<?> getSingleTest(@PathVariable("testId") int testId){
		ResponseEntity<?> resp=null;
		Optional<TestDetails> test = service.getOneTest(testId);
		if(test.get()== null)
			resp= new ResponseEntity<String>("Data Not found",HttpStatus.BAD_REQUEST);
		else
		resp= new ResponseEntity<>(test,HttpStatus.OK);
		
		return resp;
	}
	
	@DeleteMapping("/test/{testId}")
	public ResponseEntity<String> deleteTestById(@PathVariable("testId") Integer testId)
	{
	ResponseEntity<String> resp=null;
	//check for exist
	boolean present=service.isTestPresent(testId);
	if(present) { 
	//if exist
	service.deleteTest(testId);
	resp=new ResponseEntity<String>("Deleted test '"+testId+"' successfully",HttpStatus.ACCEPTED);
	} else { //not exist
	resp=new ResponseEntity<String>("'"+testId+"' does not Exist",HttpStatus.BAD_REQUEST);
	}
	return resp;
	}
	
	@PutMapping("/test/{testId}")
	public ResponseEntity<String> updateTest(@PathVariable("testId") int tid,@RequestBody TestDetails test){
	ResponseEntity<String> resp=null;
	//check for id exist
	boolean present=service.isTestPresent(tid);
	if(present) { //if exist
	test.setTestId(tid);
	service.updateTest(test);
	resp=new ResponseEntity<String>("Updated Successfully",HttpStatus.OK);
	} else {
		//not exist
		resp=new ResponseEntity<String>("Record '"+test.getTestId()+" ' not found",HttpStatus.BAD_REQUEST);
		}
		return resp;
	}
	
	//========================Prescription Details====================================
	
	@PostMapping("/prescription/{visitId}")
	public ResponseEntity<String> savePrescription(@PathVariable("visitId") int vid,@RequestBody PrescriptionDetails prescribe){
	ResponseEntity<String> resp=null;
	try {
	prescribe.setVisitId(vid);
	String name=service.savePrescription(prescribe);
	resp=new ResponseEntity<String>("Prescription with '"+name+"' created", HttpStatus.OK);
	} catch (Exception e) {
	resp=new ResponseEntity<String>(e.getMessage(), 
	HttpStatus.INTERNAL_SERVER_ERROR);
	e.printStackTrace();
	}
	return resp;
	}
	
	@GetMapping("/prescription")
	public ResponseEntity<?> getAllPriscriptions(){
	ResponseEntity<?> resp=null;
	List<PrescriptionDetails> prescriptions =service.getAllPrescriptions();
	if(prescriptions==null || prescriptions.isEmpty()) {
		String message="No Data Found";
		resp=new ResponseEntity<String>(message,HttpStatus.NO_CONTENT);
		} else {
		resp=new ResponseEntity<List<PrescriptionDetails>>(prescriptions,HttpStatus.OK);
		}
		return resp;
	}
	
	@GetMapping("/prescription/{prescId}")
	public ResponseEntity<?> getSinglePrescription(@PathVariable("prescId") int prid){
		ResponseEntity<?> resp=null;
		Optional<PrescriptionDetails> prescribe = service.getOnePrescription(prid);
		if(prescribe.get()== null)
			resp= new ResponseEntity<String>("Data Not found",HttpStatus.BAD_REQUEST);
		else
		resp= new ResponseEntity<>(prescribe,HttpStatus.OK);
		
		return resp;
	}
	
	@DeleteMapping("/prescription/{prescId}")
	public ResponseEntity<String> deletePrescriptionById(@PathVariable("prid") Integer prid)
	{
	ResponseEntity<String> resp=null;
	//check for exist
	boolean present=service.isPrescriptionPresent(prid);
	if(present) { 
	//if exist
	service.deletePrescription(prid);
	resp=new ResponseEntity<String>("Deleted Prescription '"+prid+"' successfully",HttpStatus.ACCEPTED);
	} else { //not exist
	resp=new ResponseEntity<String>("'"+prid+"' does not Exist",HttpStatus.BAD_REQUEST);
	}
	return resp;
	}
	
	@PutMapping("/prescription/{prescId}")
	public ResponseEntity<String> updatePrescription(@PathVariable("prid") int prid,@RequestBody PrescriptionDetails prescribe){
	ResponseEntity<String> resp=null;
	//check for id exist
	boolean present=service.isPrescriptionPresent(prid);
	if(present) { //if exist
	prescribe.setPrescriptionId(prid);
	service.updatePrescription(prescribe);
	resp=new ResponseEntity<String>("Updated Successfully",HttpStatus.OK);
	} else {
		//not exist
		resp=new ResponseEntity<String>("Record '"+prescribe.getPrescriptionId()+" ' not found",HttpStatus.BAD_REQUEST);
		}
		return resp;
	}
}
