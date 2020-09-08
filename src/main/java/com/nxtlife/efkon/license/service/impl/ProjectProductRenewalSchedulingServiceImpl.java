package com.nxtlife.efkon.license.service.impl;

import com.nxtlife.efkon.license.dao.jpa.ProjectProductJpaDao;
import com.nxtlife.efkon.license.dao.jpa.RenewConfigurationJpaDao;
import com.nxtlife.efkon.license.dao.jpa.UserRoleJpaDao;
import com.nxtlife.efkon.license.entity.license.LicenseType;
import com.nxtlife.efkon.license.enums.ProjectProductStatus;
import com.nxtlife.efkon.license.ex.ValidationException;
import com.nxtlife.efkon.license.service.ProjectProductRenewalSchedulingService;
import com.nxtlife.efkon.license.util.MailUtil;
import com.nxtlife.efkon.license.view.RenewConfigurationResponse;
import com.nxtlife.efkon.license.view.project.product.ProjectProductResponse;
import com.sendgrid.helpers.mail.objects.Content;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.Tuple;
import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Service("projectProductRenewalSchedulingServiceImpl")
@Transactional
public class ProjectProductRenewalSchedulingServiceImpl implements ProjectProductRenewalSchedulingService {

    @Autowired
    private RenewConfigurationJpaDao renewConfigurationJpaDao;

    @Autowired
    private ProjectProductJpaDao projectProductJpaDao;

    @Autowired
    private UserRoleJpaDao userRoleJpaDao;

    @Value("${sendgrid.api-key}")
    private String sendGripApiKey;

    @Value("${sendgrid.sender.email}")
    private String fromEmailId;

    @Scheduled(cron = "0 0 6 * * *")
    public void sendProjectProductRenewalMail() {
        RenewConfigurationResponse renewConfiguration=null;
        List<RenewConfigurationResponse> renewConfigurationResponses=renewConfigurationJpaDao.findByActiveTrue();
        if (!renewConfigurationResponses.isEmpty()) {
            renewConfiguration = renewConfigurationResponses.get(0);
        } else {
            throw new ValidationException("Renew configuration details not found");
        }
        LocalDate date = LocalDate.now();
        date = date.plusDays(renewConfiguration.getShowBeforeDays());
        List<Tuple> projectProductDetails=projectProductJpaDao.findProjectProductDetailsByActiveAndStatusAndEndDateLessThanOrEqual(true,ProjectProductStatus.APPROVED,date.format(DateTimeFormatter.ofPattern("yyyy-MM-dd")));
        List<String> submitterEmailIds=userRoleJpaDao.findUserEmailByRoleName("Submitter");
        String mainContent="Dear sir,<br>Some of the project product need to be renewed whose details are:-<br>";
        try{
        for(Tuple projectProductDetail:projectProductDetails) {
            String customerName=projectProductDetail.get("customerName",String.class);
            String customerEmail=projectProductDetail.get("customerEmail",String.class);
            Boolean isEmailSend=projectProductDetail.get("emailStatus",Boolean.class);
            String productFamilyName=projectProductDetail.get("familyName",String.class);
            String productCode=projectProductDetail.get("codeName",String.class);
            String version=projectProductDetail.get("version",String.class);
            Integer licenseCount=projectProductDetail.get("licenseCount",Integer.class);
            LicenseType licenseType=projectProductDetail.get("licenseType",LicenseType.class);
            String endDate=projectProductDetail.get("endDate").toString();
            mainContent=mainContent + String.format("<h3>Customer Name :%s(%s)</h3><br>"
                     + "<li>Product Family : %s, Product Code : %s, Product Version : %s</li>"
                    + "<li>License type : %s</li>"
                    + "<li>License count : %s</li>"
                    + "<li>End date : %s</li><br>",
                    customerName,customerEmail,productFamilyName,productCode,version,licenseType.getName(),licenseCount,endDate
                    );
            if(isEmailSend) {
                MailUtil.sendEmail(sendGripApiKey, fromEmailId,customerEmail,
                        null,
                        String.format("project product(Customer Email : %s) need to be renewed",customerEmail),
                        new Content("text/html", String.format(
                                "Dear %s,<br>One of the product need to be renewed. Product Details are: <br>"
                                        + "<li>Product Family : %s, Product Code : %s, Product Version : %s</li>"
                                        + "<li>License type : %s</li>"
                                        + "<li>License count : %s</li>"
                                        + "<li>End date : %s</li><br><br>Thank you <br>-Efkon Team",
                                customerName, productFamilyName,productCode,version,licenseType.getName(),licenseCount,endDate)));

            }
        }
        mainContent+="<br><br>Thank you <br>-Efkon Team";
        if(!submitterEmailIds.isEmpty()) {
            MailUtil.sendEmail(sendGripApiKey, fromEmailId, submitterEmailIds, null,
                    "Project products need to be renewed!", new Content("text/html", mainContent));
        }
    }catch (IOException e) {
            e.printStackTrace();
        }
    }

}
