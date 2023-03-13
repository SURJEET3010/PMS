package com.pms.entity;

import jakarta.persistence.Entity;

import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "patient")
public class User {

	@Id
	private Long id;

	private String username;
	
	private String password;

	private String firstName;

	private String lastName;

	private String email;

	// getters and setters

	public String getUsername() {

		return this.username;
	}

	public String getPassword() {

		return this.password;
	}

	public String getEmail() {

		return this.email;
	}

}
