package com.nextlife.license.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nextlife.license.view.UserRequest;
import com.nxtlife.efkon.license.entity.User;
import com.nxtlife.efkon.license.repository.UserRepo;

@Service
public class UserService {
	
	@Autowired
	public UserRepo userRepo;
	
	public List<User> getUsers(){
		return userRepo.findAll();
	}
	
	public User putUser(User user) {
		return userRepo.save(user);
	}
	
	public User updateUser(UserRequest userRequest, Long id) {
		User user = userRepo.findById(id).orElse(null);
		user.setActive(userRequest.getActive());
		user.setEmail(userRequest.getEmail());
		user.setEmailSendStatus(userRequest.getEmailSendStatus());
		user.setName(userRequest.getName());
		user.setUserName(userRequest.getUserName());
		user.setPassword(userRequest.getPassword());
		user.setPhoneNumber(userRequest.getPhoneNumber());
		return userRepo.save(user);
	}
	
	public void deleteUser(Long id){
		
		userRepo.deleteById(id);
		
	}

}
