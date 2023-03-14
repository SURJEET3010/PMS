package com.revature.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.revature.entity.Physician;

public interface PhysicianRepository extends JpaRepository<Physician, String> {
	
	@Query(value="SELECT * FROM physician_availability pv WHERE availability=1",  nativeQuery = true)
	public List<Physician> findByValue(boolean availability);
	
	

}
