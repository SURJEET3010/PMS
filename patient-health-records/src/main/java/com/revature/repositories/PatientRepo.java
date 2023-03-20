package com.revature.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.revature.entities.PatientDetails;

public interface PatientRepo extends JpaRepository<PatientDetails, Integer> {

	@Query(value = "select email from patient_details where email=?1", nativeQuery = true)
	public String existsById(String email);
	@Query(value = "select password from patient_details where email=?1", nativeQuery = true)
	public String existsByPassword(String password);

}
