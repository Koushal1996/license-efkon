package com.nxtlife.efkon.license.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nxtlife.efkon.license.entity.oauth.OauthClientDetails;

public interface OauthClientDetailsDao extends JpaRepository<OauthClientDetails, String> {
	
	public OauthClientDetails findByClientId(String clientId);

}
