package com.nxtlife.efkon.license.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nxtlife.efkon.license.entity.User;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {
	
}
