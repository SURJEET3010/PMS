package com.revature.Controller;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.revature.Entity.PhysicianAvailability;
import com.revature.Repository.PhysicianRepo;
import com.revature.Service.PhysicianService;

@RestController
public class PhysicianController {

	@Autowired
	private PhysicianService physicianservice;
	private List<PhysicianAvailability> physicianavailability;

	@PostMapping("/post")
	public PhysicianAvailability postDetails(@RequestBody PhysicianAvailability physicianavailability) {
		return physicianservice.saveDetails(physicianavailability);
	}
	
	
	@GetMapping("/get")
	public List<PhysicianAvailability> getAllDetails(){
		return physicianservice.getallDetails();
	}
	
	@GetMapping("/get/{availability}")
	public List<PhysicianAvailability> getDetails(@PathVariable("availability") boolean availability){
		return physicianservice.getDetails(availability);
	}
	
	@DeleteMapping("/delete/{physicianEmail}")
	public boolean deleteDetails(@PathVariable("physicianEmail") String physicianEmail) {
		return physicianservice.deleteDetails(physicianEmail);
	}

		@PutMapping("/put/{physicianEmail}")
		public PhysicianAvailability updateDetails(@RequestBody PhysicianAvailability physicianavailability, @PathVariable("physicianEmail") String physicianEmail) {
			return physicianservice.updateDetails(physicianavailability,physicianEmail);
		}
	
//	@PutMapping("/physician-availability")
//	public ResponseEntity<Physician> UpdateAvailability(@RequestBody Physician physician,
//			@PathVariable("physicianEmail") String physicianEmail) {
//		Physician phy = null;
//
//		try {
//
//			 phy = this.physicianService.UpdateAvailability(physician, physicianEmail);
//			
//			 if(phy!=null) {
//				 System.out.println("Update successfully");
//				 return ResponseEntity.accepted().body(physician);
//			 }
//			 else {
//				 return ResponseEntity.status(HttpStatusCode.valueOf(401)).build();
//			 }
//			 
//
//		} catch (Exception e) {
//			e.printStackTrace();
//			return ResponseEntity.status(HttpStatusCode.valueOf(401)).build();
//		}
//
//	}

	
	
	
	
//	      @PostMapping("/multipleadd") 
//	  	  public PhysicianAvailability getphysician(@RequestBody List<PhysicianAvailability> physicianavailability) {
//		  this.physicianavailability = physicianavailability;
//		  return physicianservice.saveAllDetails(physicianavailability);
//		  }
	 

	/*
	 * @GetMapping("/get") public PhysicianAvailability getallDetails() { return
	 * (List<PhysicianAvailability>)
	 * PhysicianService.getDetails(physicianavailability); }
	 */
}
