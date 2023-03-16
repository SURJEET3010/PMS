package com.pms.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pms.Entity.PatientInfo;
import com.pms.Service.PatientInfoService;
import com.pms.Service.impl.PatientInfoServiceImpl;

@RestController
public class PatientInfoController {
	
	@Autowired
	public PatientInfoServiceImpl patientinfoservice;
	
	
	//this is optional just for data
	@PostMapping("/patient/post")
	public PatientInfo postDetails(@RequestBody PatientInfo patientinfo) {
		return patientinfoservice.saveDetails(patientinfo);
	}
	
	//to update an patient info with the help of id
	@PutMapping("/patient")
	public ResponseEntity<PatientInfo> updateDetails(@RequestBody PatientInfo patientinfo , @RequestParam(value ="Id") int Id) {
				PatientInfo pat = null;

			try {

				 pat = this.patientinfoservice.updateDetails(patientinfo , Id);
				
				 if(pat!=null) {
					 System.out.println("Update successfully");
					 return ResponseEntity.accepted().body(patientinfo);
				 }
				 else {
					 return ResponseEntity.status(HttpStatusCode.valueOf(401)).build();
				 }
				 

			} catch (Exception e) {
				e.printStackTrace();
				return ResponseEntity.status(HttpStatusCode.valueOf(401)).build();
			}
	}
	
	//to fetch patient of a particular id
	@GetMapping("/patient")
	public ResponseEntity<List<PatientInfo>> showAvailability(@RequestParam(value ="Id") int Id) {
		List<PatientInfo> list = patientinfoservice.getpatientinfo(Id);

		if (list == null) {
			return ResponseEntity.status(HttpStatusCode.valueOf(401)).build();
		}
		return ResponseEntity.ok().body(list);
	}
	
	
	
	
	//to fetch all patient present in table, this is only for admin
	@GetMapping("/patients")
	public ResponseEntity<List<PatientInfo>> showAllAvailability() {
		List<PatientInfo> list = patientinfoservice.showAllAvailability();
		if (list.size() <= 0) {
			return ResponseEntity.status(HttpStatusCode.valueOf(500)).build();
		}
		return ResponseEntity.ok().body(list);
	}
	
	
	
}
