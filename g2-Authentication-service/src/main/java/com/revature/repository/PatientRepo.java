package com.revature.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.revature.entity.PatientInfo;


public interface PatientRepo extends JpaRepository<PatientInfo, Integer> {

	@Query(value = "select email from patient where email=?1", nativeQuery = true)
	public String existsById(String email);
	@Query(value = "select password from patient where email=?1", nativeQuery = true)
	public String existsByPassword(String password);

}
