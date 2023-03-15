package com.revature.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.entities.PrescriptionDetails;

public interface PrescriptionRepo extends JpaRepository<PrescriptionDetails, Integer> {

}
