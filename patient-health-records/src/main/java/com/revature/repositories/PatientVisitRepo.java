package com.revature.repositories;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.entities.PatientVisitDetails;

public interface PatientVisitRepo extends JpaRepository<PatientVisitDetails, Serializable> {

}
