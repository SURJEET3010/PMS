package com.revature.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.bindings.PrescriptionModel;
import com.revature.entities.PrescriptionDetails;
import com.revature.service.PatientVisitService;

@RestController
@RequestMapping("/test/{tid}")
public class PrescriptionRestController {
	
	@Autowired
	PatientVisitService service;
	
	 @PostMapping
		public ResponseEntity<?> register(@RequestBody PrescriptionDetails preDetails) {
		 boolean bool=false;
	    	
	    	try {
	    		bool = this.service.savePrescription(preDetails);
	    		if(bool) {
	    			System.out.println(bool);
	    			return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(bool);
	    		}else {
	    			return ResponseEntity.status(HttpStatusCode.valueOf(500)).build();
	    		} 		    		
				
			} catch (Exception e) {
				e.printStackTrace();
				return ResponseEntity.status(HttpStatusCode.valueOf(500)).build();
			}	 
	 }
	 
	 @GetMapping
		public ResponseEntity<PrescriptionModel> viewData(@PathVariable("pid") int pid){
			PrescriptionModel pm= service.preDetails(pid);
			
			return ResponseEntity.accepted().body(pm);
		}	 
}