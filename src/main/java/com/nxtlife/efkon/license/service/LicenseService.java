package com.nxtlife.efkon.license.service;

import java.util.List;

import org.springframework.core.io.Resource;

import com.nxtlife.efkon.license.view.license.LicenseRequest;
import com.nxtlife.efkon.license.view.license.LicenseResponse;
import com.nxtlife.efkon.license.view.project.product.ProjectProductGraphResponse;

public interface LicenseService {

	// public LicenseResponse update(Long id, LicenseRequest request);

	/**
	 * this method is used to find the single license of a product
	 * 
	 * @param licenseId
	 * @return {@link LicenseResponse}
	 */
	public LicenseResponse findById(Long licenseId);

	/**
	 * this method is used to fetch all the license details
	 * 
	 * @return list of <tt>LicenseResponse</tt>
	 */

	public List<LicenseResponse> findAll();

	/**
	 * this method is used to create excel of all the license
	 * 
	 * @return
	 */
	public Resource findAllExcel();

	/**
	 * this method is used to generate license key of product in a project
	 * 
	 * @param id
	 * @param request
	 * @return {@link LicenseResponse}}
	 */

	public LicenseResponse generateKey(Long id, LicenseRequest request);

	/**
	 * this method is used to replace the generated license key
	 * 
	 * @param id
	 * @return {@link LicenseResponse}}
	 */
	public LicenseResponse replaceGenerateKey(Long id);

	/**
	 * this method is used to find all the licenses of particular product in a
	 * project
	 * 
	 * @param projectId
	 * @param productId
	 * @return {@link LicenseResponse}
	 */
	public List<LicenseResponse> findByProjectIdandProductId(Long projectId, Long productId);

	/**
	 * this method is used to find all the licenses of particular project
	 * 
	 * @param projectId
	 * @return {@link LicenseResponse}
	 */
	public List<LicenseResponse> findByProjectId(Long projectId);

	/**
	 * this method is used to generate the excel file containing licenses of
	 * particular product of particular project
	 * 
	 * @param projectId
	 * @param productId
	 * @return
	 */
	public Resource findLicensesByProjectIdandProductIdExcel(Long projectId, Long productId);

	/**
	 * this method is used to generate the excel file containing licenses of all the
	 * products of particular project
	 * 
	 * @param projectId
	 * @return
	 */
	public Resource findLicensesByProjectIdExcel(Long projectId);

	/**
	 * this method is used to find all the active licenses
	 * 
	 * @return {@link ProjectProductGraphResponse}
	 */
	public ProjectProductGraphResponse findActiveLicenses();

	/**
	 * this method is used to find all the expired licenses
	 * 
	 * @return {@link ProjectProductGraphResponse}
	 */
	public ProjectProductGraphResponse findExpiredLicenses();

}
