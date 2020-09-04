package com.nxtlife.efkon.license.service;

public interface ProjectProductRenewalSchedulingService {
    /**
     * this method used to send email to submitter and customer  about project product whose renewal is near to end date
     *
     * @throws com.nxtlife.efkon.license.ex.NotFoundException if renewal configuration not found
     *                                                        * @return nothing
     */
    public void sendProjectProductRenewalMail();
}
