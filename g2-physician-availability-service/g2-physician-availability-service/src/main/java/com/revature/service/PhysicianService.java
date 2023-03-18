package com.revature.service;

import java.util.List;

import com.revature.entity.Physician;

public interface PhysicianService {
	
	public List<Physician> showAllAvailability();
	public List<Physician> showAvailability(boolean availability);
	public Physician addPhysician(Physician physicianEmail);
	public boolean deletePhysician(int physicianId);
	public Physician updatePhysicianInfo(Physician physician, int physicianId);
	

}
