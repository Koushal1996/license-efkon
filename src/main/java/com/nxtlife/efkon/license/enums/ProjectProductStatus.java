package com.nxtlife.efkon.license.enums;

public enum ProjectProductStatus {
    DRAFT,SUBMIT,REVIEWED,APPROVED,REJECT_BY_REVIEWER,REJECT_BY_APPROVER;

    public static boolean matches(String status) {
        for (ProjectProductStatus projectProductStatus : ProjectProductStatus.values()) {
            if (projectProductStatus.name().equals(status)) {
                return true;
            }
        }
        return false;
    }
}
