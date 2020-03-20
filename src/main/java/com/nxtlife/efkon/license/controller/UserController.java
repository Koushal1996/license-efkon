package com.nxtlife.efkon.license.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.nextlife.license.service.UserService;
import com.nextlife.license.view.UserRequest;
import com.nxtlife.efkon.license.entity.User;

@RestController
public class UserController {

	@Autowired
	public UserService userService;

	@GetMapping("/user")
	public List<User> getUsers() {
		return userService.getUsers();
	}

	@PostMapping("user")
	public User putUser(@RequestBody User user) {
		return userService.putUser(user);
	}

	@PutMapping("user/{id}")
	public User updateUser(@RequestBody UserRequest userRequest, @PathVariable Long id) {
		return userService.updateUser(userRequest, id);
	}

	@DeleteMapping("user/{id}")
	public void deleteUser(@PathVariable Long id) {

		userService.deleteUser(id);

	}

}
