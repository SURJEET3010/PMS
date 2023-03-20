package com.revature.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.revature.entity.Physician;

import jakarta.transaction.Transactional;

public interface PhysicianRepository extends JpaRepository<Physician, Integer> {
	
	@Query(value="SELECT * FROM physician_availability pv WHERE availability=1",  nativeQuery = true)
	public List<Physician> findByValue(boolean availability);
	

	@Transactional
	@Modifying(flushAutomatically = true)
	@Query(value = "UPDATE physician_availability SET availbility =:availability WHERE physician_id =:physicianId", nativeQuery = true)
	public int updateById(@Param("physicianId") int physicianId, @Param("availability") boolean availability);

}
