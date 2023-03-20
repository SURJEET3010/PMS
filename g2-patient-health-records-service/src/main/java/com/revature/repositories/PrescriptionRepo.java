package com.revature.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.revature.entities.PrescriptionDetails;

import jakarta.transaction.Transactional;

public interface PrescriptionRepo extends JpaRepository<PrescriptionDetails, Integer> {

	@Transactional
	@Modifying(flushAutomatically = true)
	@Query(value="DELETE FROM PRESCRIPTION_DETAILS WHERE visit_id=?1", nativeQuery = true)
	public int deletePrescriptionById(@Param("visitId") Integer visitId);
}
