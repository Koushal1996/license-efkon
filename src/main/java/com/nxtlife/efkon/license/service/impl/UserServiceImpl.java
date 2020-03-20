package com.nxtlife.efkon.license.service.impl;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.UUID;

import javax.annotation.PostConstruct;
import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.nxtlife.efkon.license.dao.AuthorityDao;
import com.nxtlife.efkon.license.dao.RoleAuthorityDao;
import com.nxtlife.efkon.license.dao.RoleDao;
import com.nxtlife.efkon.license.dao.UserDao;
import com.nxtlife.efkon.license.entity.common.RoleAuthorityKey;
import com.nxtlife.efkon.license.entity.common.UserRoleKey;
import com.nxtlife.efkon.license.entity.user.Authority;
import com.nxtlife.efkon.license.entity.user.Role;
import com.nxtlife.efkon.license.entity.user.RoleAuthority;
import com.nxtlife.efkon.license.entity.user.User;
import com.nxtlife.efkon.license.entity.user.UserRole;
import com.nxtlife.efkon.license.ex.NotFoundException;
import com.nxtlife.efkon.license.ex.ValidationException;
import com.nxtlife.efkon.license.service.AuthorityService;
import com.nxtlife.efkon.license.service.BaseService;
import com.nxtlife.efkon.license.service.UserService;
import com.nxtlife.efkon.license.view.SuccessResponse;
import com.nxtlife.efkon.license.view.user.UserResponse;
import com.nxtlife.efkon.license.view.user.security.PasswordRequest;

@Service("userService")
@Transactional
public class UserServiceImpl extends BaseService implements UserDetailsService, UserService {

	@Value("${efkon.organization.name}")
	private String organizationName;

	@Value("${efkon.organization.code}")
	private String organizationCode;

	@Value("${efkon.organization.latitude}")
	private String organizationLatitude;

	@Value("${efkon.organization.longitude}")
	private String organizationLongitude;

	@Autowired
	private UserDao userDao;

	@Autowired
	private RoleDao roleDao;

	@SuppressWarnings("unused")
	@Autowired
	private AuthorityService authorityService;

	@Autowired
	private AuthorityDao authorityDao;

	@Autowired
	private RoleAuthorityDao roleAuthorityDao;

	private static PasswordEncoder userPasswordEncoder = new BCryptPasswordEncoder();

	private static Logger logger = org.slf4j.LoggerFactory.getLogger(UserServiceImpl.class);

	@PostConstruct
	public void init() {

		Role role;
		if (userDao.findByUsername("ajay") == null) {
			User user = new User("ajay", userPasswordEncoder.encode("12345"), null);
			user.setName("Ajay");
			userDao.saveAll(Arrays.asList(user));
			List<Authority> authorities = authorityDao.findAll();
		}

	}

	@Override
	@Transactional
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userDao.findByUsername(username);
		if (user == null) {
			throw new UsernameNotFoundException(String.format("username(%s) not found", username));
		}
		user.setUserId(user.getId());
		Set<Authority> authorities = new HashSet<>();
		Set<Role> roles = new HashSet<>();
		for (UserRole userRole : user.getUserRoles()) {
			for (RoleAuthority roleAuthority : userRole.getRole().getRoleAuthorities()) {
				authorities.add(roleAuthority.getAuthority());
				roles.add(roleAuthority.getRole());
			}
		}
		user.setAuthorities(authorities);
		user.setRoles(roles);
		return user;
	}

	@Override
	public UserResponse findByAuthentication() {
		User user = getUser();
		if (user == null) {
			throw new NotFoundException("User not found");
		}
		UserResponse response = new UserResponse(user);
		return response;
	}

	@Override
	public SuccessResponse forgotPassword(String username) {
		if (!username.matches("^[@A-Za-z0-9_]{3,20}$")) {
			throw new ValidationException(String.format("Incorrect username [%s]", username));
		}
		Map<String, String> response = userDao.findEmailAndContactByUsername(username);
		if (response == null) {
			throw new NotFoundException(String.format("User[username-%s] not found", username));
		}
		if (response.get("email") == null && response.get("contactNo") == null) {
			throw new ValidationException("User email/contact not register with us");
		}
		String generatedPassword = UUID.randomUUID().toString().substring(0, 6);
		logger.info("Password {} has been sent to email {}/contact {}", generatedPassword, response.get("email"),
				response.get("contactNo"));
		userDao.setGeneratedPassword(username, userPasswordEncoder.encode(generatedPassword));
		return new SuccessResponse(HttpStatus.OK.value(),
				"New generated password has been sent to your email and contact number");
	}

	@Override
	public SuccessResponse matchGeneratedPassword(String username, String generatedPassword) {
		String encodedGeneratedPassword = userDao.findGeneratedPasswordByUsername(username);
		if (encodedGeneratedPassword == null) {
			throw new NotFoundException(String.format("User[username-%s] not found or password already set", username));
		}
		if (!userPasswordEncoder.matches(generatedPassword, encodedGeneratedPassword)) {
			throw new ValidationException(String.format("Sent generated password[%s] incorrect", generatedPassword));
		}
		return new SuccessResponse(HttpStatus.OK.value(), "Generated password matched");
	}

	@Override
	public SuccessResponse changePasswordByGeneratedPassword(PasswordRequest request) {
		request.checkGeneratedPassword();
		SuccessResponse response = matchGeneratedPassword(request.getUsername(), request.getGeneratedPassword());
		if (response.getStatus() != HttpStatus.OK.value()) {
			throw new ValidationException("Generated password didn't match");
		}
		int rows = userDao.setPassword(request.getUsername(), userPasswordEncoder.encode(request.getPassword()));
		if (rows == 0) {
			throw new ValidationException("No row updated");
		}
		return new SuccessResponse(HttpStatus.OK.value(), "Password changed successfully");
	}

	@Override
	public SuccessResponse changePassword(PasswordRequest request) {
		request.checkPassword();
		String encodedPassword = userDao.findPasswordById(getUserId());
		if (encodedPassword == null) {
			throw new NotFoundException(
					String.format("User[id-%s] not found or password already set", mask(getUserId())));
		}
		if (!userPasswordEncoder.matches(request.getOldPassword(), encodedPassword)) {
			throw new ValidationException(String.format("Old password[%s] incorrect", request.getOldPassword()));
		}
		int rows = userDao.setPassword(getUserId(), userPasswordEncoder.encode(request.getPassword()));
		if (rows == 0) {
			throw new ValidationException("No row updated");
		}
		return new SuccessResponse(HttpStatus.OK.value(), "Password changed successfully");
	}

}
