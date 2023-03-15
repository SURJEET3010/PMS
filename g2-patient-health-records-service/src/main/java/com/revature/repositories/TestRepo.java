package com.revature.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.entities.TestDetails;

public interface TestRepo extends JpaRepository<TestDetails, Integer> {

}
