package com.revature.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.revature.entity.Physician;
import com.revature.service.PhysicianService;

@RestController
public class PhysicianController {

	@Autowired
	private PhysicianService physicianService;
	
	
	@GetMapping("/physician-availability")
	public ResponseEntity<List<Physician>> showAvailability(@RequestParam( value="availability") boolean availability) {
		List<Physician> list = physicianService.showAvailability(availability);

		if (list == null) {
			return ResponseEntity.status(HttpStatusCode.valueOf(401)).build();
		}
		return ResponseEntity.ok().body(list);
	}
	
	
	@GetMapping("/physician-availability/")
	public ResponseEntity<List<Physician>> showAllAvailability() {
		List<Physician> list = physicianService.showAllAvailability();
		if (list.size() <= 0) {
			return ResponseEntity.status(HttpStatusCode.valueOf(500)).build();
		}
		return ResponseEntity.ok().body(list);
	}

	
	

	@PostMapping("/physician-availability")
	public ResponseEntity<Physician> acceptAvailability(@RequestBody Physician physician) {
		Physician phy = null;

		try {
			phy = this.physicianService.acceptAvailability(physician);
			System.out.println(physician);
			return ResponseEntity.status(HttpStatus.CREATED).body(phy);
			

		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatusCode.valueOf(401)).build();
		}

	}

	@DeleteMapping("/physician-availability/{physicianEmail}")
	public ResponseEntity<Void> rejectAvailability(@PathVariable("physicianEmail") String physicianEmail) {
		boolean bool=false;
		try {
			bool = this.physicianService.rejectAvailability(physicianEmail);
			if(bool == true) {
				System.out.println("Deleted succesfully");
				return ResponseEntity.status(HttpStatusCode.valueOf(202)).build();
			} else {
				return ResponseEntity.status(HttpStatusCode.valueOf(500)).build();
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatusCode.valueOf(500)).build();
		}

	}

	@PutMapping("/physician-availability/{physicianEmail}")
	public ResponseEntity<Physician> UpdateAvailability(@RequestBody Physician physician,
			@PathVariable("physicianEmail") String physicianEmail) {
		Physician phy = null;

		try {

			 phy = this.physicianService.UpdateAvailability(physician, physicianEmail);
			
			 if(phy!=null) {
				 System.out.println("Update successfully");
				 return ResponseEntity.accepted().body(physician);
			 }
			 else {
				 return ResponseEntity.status(HttpStatusCode.valueOf(401)).build();
			 }
			 

		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatusCode.valueOf(401)).build();
		}

	}

}
