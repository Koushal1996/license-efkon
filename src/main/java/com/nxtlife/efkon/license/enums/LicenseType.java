package com.nxtlife.efkon.license.enums;

public enum LicenseType {
    COMMERCIAL,DEMO;

    public static boolean matches(String type) {
        for (LicenseType licenseType : LicenseType.values()) {
            if (licenseType.name().equals(type)) {
                return true;
            }
        }
        return false;
    }

}
