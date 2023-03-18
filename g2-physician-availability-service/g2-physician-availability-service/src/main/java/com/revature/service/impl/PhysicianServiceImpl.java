package com.revature.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.entity.Physician;
import com.revature.repository.PhysicianRepository;
import com.revature.service.PhysicianService;

@Service
public class PhysicianServiceImpl implements PhysicianService {

	@Autowired
	private PhysicianRepository physicianRepository;

	@Override
	public List<Physician> showAllAvailability() {
		List<Physician> list = (List<Physician>) this.physicianRepository.findAll();
		return list;
	}

	@Override
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

	@Override
	public Physician addPhysician(Physician physician) {

		
		Physician result = physicianRepository.save(physician);
		return result;

	}

	@Override
	public boolean deletePhysician(int physicianId) {
		boolean bool = physicianRepository.existsById(physicianId);
		physicianRepository.deleteById(physicianId);
		if (bool) {
			System.out.println("item deleted");
			return true;
		} else {
			return false;

		}

	}

	@Override
	public Physician updatePhysicianInfo(Physician physician, int physicianId) {
		physician.setPhysicianId(physicianId);
		Physician result = physicianRepository.save(physician);
		return result;

	}

}
