package com.revature.service;

import java.util.List;


import com.revature.entity.Allergy;

public interface AllergyService {
	
//	public Allergy saveNurse(Allergy allergy);
	
	public List<Allergy> getAllergies();
	
	public Allergy getAllergyById(int id);
	

}
