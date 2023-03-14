package com.pms.service;

import com.pms.entity.User;

/**
 * @author Surjeet
 *
 */

public interface UserService {


    User register(User user);

    User login(String username, String password);

}
