package com.revature.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.revature.entities.TestDetails;

import jakarta.transaction.Transactional;

public interface TestRepo extends JpaRepository<TestDetails, Integer> {
	
	@Transactional
	@Modifying(flushAutomatically = true)
	@Query(value="DELETE FROM TEST_DETAILS WHERE visit_id=?1", nativeQuery = true)
	public int deleteTestById(@Param("visitId") Integer visitId);

}
