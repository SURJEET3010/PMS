package com.revature.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.entities.Allergy;

public interface AllergyRepo extends JpaRepository<Allergy, Integer> {

}
