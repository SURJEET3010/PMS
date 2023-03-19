package com.pms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pms.entity.PatientInfo;
import com.pms.service.AuthenticationService;

@RestController
@RequestMapping("/patient")
public class PatientRestController {
	
	@Autowired
	private AuthenticationService service;
	
	    @PostMapping("/register")
		public ResponseEntity<?> register(@RequestBody PatientInfo patientDetails) {
	    	boolean bool=false;
	    	
	    	try {
	    		bool = this.service.register(patientDetails);
	    		if(bool) {
	    			System.out.println(bool);
	    			return ResponseEntity.status(HttpStatus.CREATED).body(bool);
	    		}else {
	    			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
	    		} 		    		
				
			} catch (Exception e) {
				e.printStackTrace();
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
			}			
		}
	    
	    
	    @PostMapping("/login")
		public ResponseEntity<?> login(@RequestBody PatientInfo patientInfo) {
	    	boolean bool=false;
	    	
	    	try {
	    		bool = this.service.login(patientInfo);
	    		System.out.println(bool);
	    		if(bool) {
	    			return ResponseEntity.status(HttpStatus.ACCEPTED).body(bool);
	    		}else{
	    			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
	    		}	    		    		
				
			} catch (Exception e) {
				e.printStackTrace();
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
			}			
		}
	    
	    
	    
	   
}
