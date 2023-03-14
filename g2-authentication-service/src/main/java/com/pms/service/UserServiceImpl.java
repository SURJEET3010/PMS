/**
 * 
 */
package com.pms.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.pms.entity.User;
import com.pms.repository.UserRepository;

/**
 * @author Surjeet
 *
 */
public class UserServiceImpl implements UserService {
	
	@Autowired
    private UserRepository userRepository;
    

    @Override
    public User login(String username, String password) {
        User user = userRepository.findByUsername(username);
        if (user == null) {
            throw new RuntimeException("Invalid username or password");
        }

        if (!password.equals(user.getPassword())) {
            throw new RuntimeException("Invalid username or password");
        }

        return user;
    }


	@Override
	public User register(User user) {
		User existingUser = userRepository.findByUsername(user.getUsername());
        if (existingUser != null) {
            throw new RuntimeException("Username already exists");
        }

        existingUser = userRepository.findByEmail(user.getEmail());
        if (existingUser != null) {
            throw new RuntimeException("Email already exists");
        }

        return userRepository.save(user);
	}
}
