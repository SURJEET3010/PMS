package com.revature.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.modal.EmailRequest;
import com.revature.service.NotificationService;

@RestController
public class NotificationController {
	
	@Autowired
	private NotificationService notificationService;
	

	/*
	 * @GetMapping("/email-notification") public String welcome() {
	 * 
	 * return "Hello this is for notification service "; }
	 */
	
	// API to send email
	@PostMapping("/email-notification")
	public ResponseEntity<?> sendEmail(@RequestBody EmailRequest request){
		System.out.println(request);
		
		boolean result = this.notificationService.sendEmail(request.getSubject(), request.getMessage(), request.getTo());
		
		if(result) {
			return ResponseEntity.ok("Email sent successfully.");
		}
		else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Email not sent");
		}				
	}
	
}
