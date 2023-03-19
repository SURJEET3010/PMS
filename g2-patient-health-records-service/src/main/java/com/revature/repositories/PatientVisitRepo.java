package com.revature.repositories;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.revature.entities.PatientVisitDetails;

import jakarta.transaction.Transactional;

public interface PatientVisitRepo extends JpaRepository<PatientVisitDetails, Serializable> {
	@Transactional
	@Modifying(flushAutomatically = true)
	@Query(value="DELETE FROM VISIT_DETAILS WHERE patient_id=?1", nativeQuery = true)
	public int deleteTestById(@Param("patientId") Integer patientId);
}
