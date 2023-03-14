package com.pms.Controller;

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

import com.pms.Entity.Appointment;
import com.pms.Service.AppointmentService;

@RestController
public class AppointmentController {

		@Autowired
		private AppointmentService appointmentservice;
		
		
		
		@PostMapping("/appointment")
		public ResponseEntity<Appointment> saveDetails(@RequestBody Appointment appointment){
			Appointment app = null;
			try {
			app = this.appointmentservice.saveDetails(appointment);
			System.out.println(appointment);
			return ResponseEntity.status(HttpStatus.CREATED).body(app);
			}
			catch (Exception e) {
				e.printStackTrace();
				return ResponseEntity.status(HttpStatus.valueOf(500)).build();
			}
		}
		
		
		@DeleteMapping("/appointment/{appointmentId}")
		public ResponseEntity<Void> deleteDetails(@PathVariable("appointmentId") Long appointmentId) {
			boolean bool=false;
			try {
				bool = this.appointmentservice.deleteDetails(appointmentId);
				if(bool == true) {
					System.out.println("Deleted succesfully");
					return ResponseEntity.status(HttpStatus.valueOf(202)).build();
				} else {
					return ResponseEntity.status(HttpStatus.valueOf(500)).build();
				}
				
			} catch (Exception e) {
				e.printStackTrace();
				return ResponseEntity.status(HttpStatus.valueOf(500)).build();
			}

		}

		
		
		@PutMapping("/appointment/{appointmentId}")
		public ResponseEntity<Appointment> updateDetails(@RequestBody Appointment appointment , @PathVariable("appointmentId") Long appointmentId) {
			Appointment app = null;
			
			try {

				 app = this.appointmentservice.updateDetails(appointment, appointmentId);
				
				 if(app!=null) {
					 System.out.println("Update successfully");
					 return ResponseEntity.accepted().body(appointment);
				 }
				 else {
					 return ResponseEntity.status(HttpStatusCode.valueOf(401)).build();
				 }
				 

			} catch (Exception e) {
				e.printStackTrace();
				return ResponseEntity.status(HttpStatusCode.valueOf(401)).build();
			}

		
		
		}
		
		
		
		
		//fetch all appointments with physicianEmail and acceptance and appointmentDate
		@GetMapping("/appointment/{physicianEmail}")
		public ResponseEntity<List<Appointment>> showAvailabilityByDate(@PathVariable("physicianEmail") String physicianEmail ,
				@RequestParam( value="acceptance") String acceptance,
				@RequestParam( value="appointmentDate") String date) {
			List<Appointment> list = appointmentservice.showAvailability(physicianEmail, date, acceptance);
			if (list == null) {
				return ResponseEntity.status(HttpStatusCode.valueOf(401)).build();
			}
			return ResponseEntity.ok().body(list);
		}
		
		
		
		
		
		//fetch all patients with patientsId
		@GetMapping("/patient/{patientId}")
		public ResponseEntity<List<Appointment>> showAvailability(@PathVariable("patientId") int patientId) {
			List<Appointment> list = appointmentservice.getAppointment(patientId);

			if (list == null) {
				return ResponseEntity.status(HttpStatusCode.valueOf(401)).build();
			}
			return ResponseEntity.ok().body(list);
		}
		
		//fetch all appointments with acceptance
		@GetMapping("/appointment")
		public ResponseEntity<List<Appointment>> findByAcceptance(@RequestParam( value="acceptance") String acceptance){
			List<Appointment> list = appointmentservice.showAppointment(acceptance);

			if (list == null) {
				return ResponseEntity.status(HttpStatusCode.valueOf(401)).build();
			}
			return ResponseEntity.ok().body(list);
		}
		
		
		//fetch all appointments with physicianEmail and acceptance
		@GetMapping("/appointments/{physicianEmail}")
		public ResponseEntity<List<Appointment>> showAvailabilityByPending(@PathVariable("physicianEmail") String physicianEmail ,
				@RequestParam( value="acceptance") String acceptance) {
			List<Appointment> list = appointmentservice.showAppointmentByRejected(physicianEmail, acceptance);
			if (list == null) {
				return ResponseEntity.status(HttpStatusCode.valueOf(401)).build();
			}
			return ResponseEntity.ok().body(list);
		}
		}


		
