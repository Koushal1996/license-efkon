package com.nxtlife.efkon.license.enums;

public enum LicenseType {
	COMMERCIAL("CL"), DEMO("DM");

	private String code;

	private LicenseType(String code) {
		this.code = code;
	}

	public String getCode() {
		return code;
	}

	public static boolean matches(String type) {
		for (LicenseType licenseType : LicenseType.values()) {
			if (licenseType.name().equals(type)) {
				return true;
			}
		}
		return false;
	}

}
