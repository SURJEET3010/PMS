package com.revature.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.entities.PatientDetails;
import com.revature.service.RegisterService;



@RestController
@RequestMapping("/patient")
public class PatientRestController {
	
	@Autowired
	private RegisterService registerService;
	
	    @PostMapping("/register")
		public ResponseEntity<?> register(@RequestBody PatientDetails patientDetails) {
	    	boolean bool=false;
	    	
	    	try {
	    		bool = this.registerService.register(patientDetails);
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
	    public ResponseEntity<List<PatientDetails>> viewPatients(){
	    	List<PatientDetails> list= registerService.viewAllPatient();
	    	return new ResponseEntity<>(list,HttpStatus.OK);
	    }
	    
	    
	    
	    @PostMapping("/login")
		public ResponseEntity<?> login(@RequestBody PatientDetails patientDetails) {
	    	boolean bool=false;
	    	
	    	try {
	    		bool = this.registerService.login(patientDetails);
	    		System.out.println(bool);
	    		if(bool) {
	    			return ResponseEntity.status(HttpStatusCode.valueOf(202)).body(bool);
	    		}else{
	    			return ResponseEntity.status(HttpStatusCode.valueOf(404)).build();
	    		}	    		    		
				
			} catch (Exception e) {
				e.printStackTrace();
				return ResponseEntity.status(HttpStatusCode.valueOf(404)).build();
			}			
		}
	    
	    
	

}
