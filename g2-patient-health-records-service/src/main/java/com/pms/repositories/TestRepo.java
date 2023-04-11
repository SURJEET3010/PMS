package com.pms.repositories;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.pms.model.TestDetails;


public interface TestRepo extends JpaRepository<TestDetails, Serializable> {
	
	
	@Query(value="SELECT * FROM TEST_DETAILS WHERE VISIT_ID=?1", nativeQuery=true)
	public List<TestDetails> getAllTests(@Param("visitId") String visitId);
	
	



}
