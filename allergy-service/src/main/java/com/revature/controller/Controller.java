package com.revature.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.entity.Allergy;
import com.revature.service.impl.AllergyServiceImpl;

@RestController
@RequestMapping("/api/v1")

public class Controller {
	
	@Autowired
	private AllergyServiceImpl allergyService;
	
	@GetMapping("/allergy")
	public List<Allergy> findAllAllergies(){
		return allergyService.getAllergies();
	}
	
	@GetMapping("/allergy/{id}")
	public Allergy findAllergyById(@PathVariable int id) {
		return allergyService.getAllergyById(id);
	}

}
