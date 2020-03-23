package com.nxtlife.efkon.license.service;

import com.nxtlife.efkon.license.ex.NotFoundException;
import com.nxtlife.efkon.license.ex.ValidationException;
import com.nxtlife.efkon.license.view.SuccessResponse;
import com.nxtlife.efkon.license.view.user.UserResponse;
import com.nxtlife.efkon.license.view.user.security.PasswordRequest;

public interface UserService {

	/**
	 * this method used to fetch user details using auth token
	 * 
	 * @return <tt>UserResponse</tt>
	 * @throws NotFoundException - if user not found
	 */
	public UserResponse findByAuthentication();

	/**
	 * this method used change password using email or contact.
	 * 
	 * @param username
	 * @return <tt>SuccessResponse</tt> - success message
	 * @throws ValidationException if username pattern didn't match or email or
	 *                             contact not registered with us
	 * @throws NotFoundException   if username not found
	 */
	public SuccessResponse forgotPassword(String username);

	/**
	 * this method used to change password using old password
	 * 
	 * @param request - key value pair of old password
	 * @return <tt>SuccessResponse</tt> - success message
	 * @throws ValidationException if old password is not correct
	 * @throws NotFoundException   if user not found with password
	 */
	public SuccessResponse changePassword(PasswordRequest request);

}
