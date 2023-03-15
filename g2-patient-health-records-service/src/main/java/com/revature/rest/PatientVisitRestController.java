package com.revature.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.bindings.PatientVisitModel;
import com.revature.bindings.TestModel;
import com.revature.service.PatientVisitService;

@RestController
@RequestMapping("/patient/{pid}")
public class PatientVisitRestController {
	
	@Autowired
	private PatientVisitService service;
	
	@PostMapping
	public String save(@RequestBody PatientVisitModel form){
		String status=service.saveDetails(form);
		return status;
	}
	
	@GetMapping
	public PatientVisitModel viewData(@PathVariable("pid") int pid){
		return service.patientDetails(pid);
	}
		
	@PutMapping
	PatientVisitModel update(@PathVariable("pid") int pid) {
		return service.patientDetails(pid); 	
	}
	
	
	@DeleteMapping
	String deleteById(@PathVariable("pid") int pid){
		String status= service.deleteDetails(pid);
		if(pid==0)
		 return status;
		else
			return "Not deleted";
		
	}
	
	
	//=====================Test Details Rest Controller===============================================
	
	  
	 @PostMapping("/savetest")
	public String save(@RequestBody TestModel form){
		String status=service.saveTestDetails(form);
		return status;
	}
	
	@GetMapping("/viewtest/{tid}")
	public TestModel viewTest(@PathVariable int tid){
		return service.testDetails(tid);
	}
		
	@PutMapping("/updatetest/{tid}")
	TestModel updateTest(@PathVariable int tid) {
		return service.testDetails(tid); 	
	}
	
	
	@DeleteMapping("deletetest/{tid}")
	String deleteTest(@PathVariable int tid){
		String status= service.deleteTest(tid);
		if(tid==0)
		 return status;
		else
			return "Not deleted";
		
	}
	
	
	
	
}























//@GetMapping("/view/{pid}")
//PatientVisitModel viewPatient(@PathVariable("pid") int pid) {
//	return service.editDetails(pid); 	
//}
