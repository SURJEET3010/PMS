package com.pms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

@SpringBootApplication
@RequestMapping("/api/v1")
@CrossOrigin(origins="*")
public class PatientHealthRecordsApplication {

	public static void main(String[] args) {
		SpringApplication.run(PatientHealthRecordsApplication.class, args);
	}

}
