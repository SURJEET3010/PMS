package com.revature;

import java.time.LocalDateTime;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.ApplicationContext;

import com.revature.entity.Physician;
import com.revature.repository.PhysicianRepository;

@SpringBootApplication
@EnableDiscoveryClient
public class G2PhysicianAvailabilityServiceApplication {

	public static void main(String[] args) {
		
		ApplicationContext context = SpringApplication.run(G2PhysicianAvailabilityServiceApplication.class, args);
		
		PhysicianRepository physicianRepository = context.getBean(PhysicianRepository.class);
		
		Physician physician = new Physician();
		physician.setPhysicianEmail("Phy123@gmail.com");
		physician.setAvailability(false);
		LocalDateTime localDateTime = LocalDateTime.now();
		physician.setDate(localDateTime);
		
		
		Physician phy = physicianRepository.save(physician);
		System.out.println(phy);
		
	}

}
