package com.revature.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.entity.Physician;
import com.revature.repository.PhysicianRepository;

@Service
public class PhysicianService  {
	@Autowired
	private PhysicianRepository physicianRepository;

	public List<Physician> showAllAvailability() {
		List<Physician> list = (List<Physician>) this.physicianRepository.findAll();
		return list;
	}

	public List<Physician> showAvailability(boolean availability) {
		List<Physician> physician = null;

		try {
			List<Physician> list = (List<Physician>) this.physicianRepository.findByValue(availability);
			return list;
		} catch (Exception e) {
			e.printStackTrace();
		}

		return physician;
	}

	public Physician acceptAvailability(Physician physicianEmail) {
		Physician result = physicianRepository.save(physicianEmail);
		return result;
	}

	public boolean rejectAvailability(String physicianEmail) {
		boolean bool = physicianRepository.existsById(physicianEmail);
		
		if(bool != true) {
			return bool;
		}
		
		physicianRepository.deleteById(physicianEmail);
		System.out.println("item deleted");	
		return bool;

	}

	public Physician UpdateAvailability(Physician physician, String physicianEmail) {
		physician.setPhysicianEmail(physicianEmail);
		Physician result = physicianRepository.save(physician);
		return result;

	}

}
