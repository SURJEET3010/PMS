package com.pms.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.pms.Entity.PatientInfo;

public interface PatientInfoRepository extends JpaRepository<PatientInfo, Integer> {
	
	
	//nativequery for fetching patient info with the help of id
	@Query(value="SELECT * FROM patient pv WHERE Id=?1",  nativeQuery = true)
	public List<PatientInfo> findByPatientId(int Id);

	
	
}
