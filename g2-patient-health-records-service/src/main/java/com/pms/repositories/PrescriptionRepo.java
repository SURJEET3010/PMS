package com.pms.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.pms.model.PrescriptionDetails;

public interface PrescriptionRepo extends JpaRepository<PrescriptionDetails, String> {
	
	@Query(value="SELECT * FROM PRESCRIPTION_DETAILS WHERE visit_id=?1", nativeQuery = true)
	public List<PrescriptionDetails> getPrescriptions(@Param("visitId") String visitId);

}
