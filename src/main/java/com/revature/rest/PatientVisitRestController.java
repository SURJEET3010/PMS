package com.revature.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.bindings.PatientVisitModel;
import com.revature.service.PatientVisitService;

@RestController
public class PatientVisitRestController {
	
	@Autowired
	private PatientVisitService service;
	
	@PostMapping("/save")
	public String save(@RequestBody PatientVisitModel form){
		String status=service.saveDetails(form);
		return status;
	}
	
	@GetMapping("/view")
	public List<PatientVisitModel> viewData(){
		return service.viewAll();
	}
	
	@GetMapping("/view/{pid}")
	PatientVisitModel update(@PathVariable int pid) {
		return service.editDetails(pid); 	
	}
	
	@DeleteMapping("/delete/{pid}")
	List<PatientVisitModel> deleteById(@PathVariable int pid){
		service.deleteDetails(pid);
		return viewData();
		
	}

}
