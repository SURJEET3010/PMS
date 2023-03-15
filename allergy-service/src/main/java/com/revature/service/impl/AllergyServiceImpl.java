package com.revature.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.entity.Allergy;
import com.revature.repository.AllergyRepository;
import com.revature.service.AllergyService;

@Service
public class AllergyServiceImpl implements AllergyService {
	
	@Autowired
	private AllergyRepository allergyRepository;

	@Override
	public List<Allergy> getAllergies() {
		// TODO Auto-generated method stub
		return allergyRepository.findAll();
	}

	@Override
	public Allergy getAllergyById(int id) {
		// TODO Auto-generated method stub
		return allergyRepository.findById(id).orElse(null);
	}

}
