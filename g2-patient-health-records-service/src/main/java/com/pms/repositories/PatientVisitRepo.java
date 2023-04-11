package com.pms.repositories;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.pms.model.PatientVisitDetails;

public interface PatientVisitRepo extends JpaRepository<PatientVisitDetails, Serializable> {
	
	@Query(value = "select *from patient_visit_details WHERE patient_id=?1 order by created_date desc" , nativeQuery= true)
	public List<PatientVisitDetails> getAllVisitDetails(@Param("patientId") String patientId);
	
	@Query(value="select * from patient_visit_details where patient_id=?1 order by created_date desc limit 1", nativeQuery=true)
	public PatientVisitDetails findByVisitDate(@Param("patientId") String PatientId);
	
	
}
