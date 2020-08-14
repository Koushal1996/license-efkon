import { FormBuilder } from "@angular/forms";
import { ReportService } from "./../../../../services/report/report.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-license",
  templateUrl: "./license.component.html",
  styleUrls: ["./license.component.scss"],
})
export class LicenseComponent implements OnInit {
  licebseReportsByEmail: any;
  CustomerEmail: any;
  CustomerName: any;
  isLoader: boolean = true;
  licebseReportsCopyByEmail: any;
  searchLicenseForm: any;
  constructor(
    private reportservice: ReportService,
    private activate: ActivatedRoute,
    private fb: FormBuilder,
    private route: Router
  ) {}

  ngOnInit() {
    this.activate.params.subscribe((params) => {
      console.log(params);
      this.CustomerEmail = params["email"];
      console.log(this.CustomerEmail);
      this.CustomerName = params["name"];
      console.log(this.CustomerName);
    });
    this.reportservice.getLicenseReportByEmail(this.CustomerEmail).subscribe(
      (data) => {
        //console.log(data);
        this.licebseReportsByEmail = data;
        this.licebseReportsCopyByEmail = data;
        this.isLoader = false;
      },
      (error) => {
        this.isLoader = false;
      }
    );
    this.searchLicenseForm = this.fb.group({
      Search: [""],
    });
  }
  onsearchLicenseForm(key) {
    if (key) {
      this.licebseReportsByEmail = this.licebseReportsCopyByEmail.filter(
        (item) =>
          //console.log(item)

          (item.projectProduct.licenseTypeName &&
            item.projectProduct.licenseTypeName
              .toLowerCase()
              .indexOf(key.toLowerCase()) > -1) ||
          (item.projectProduct.productDetail.expirationMonthCount &&
            item.projectProduct.productDetail.expirationMonthCount
              .toLowerCase()
              .indexOf(key.toLowerCase()) > -1) ||
          (item.projectProduct.productDetail.productFamilyName &&
            item.projectProduct.productDetail.productFamilyName
              .toLowerCase()
              .indexOf(key.toLowerCase()) > -1) ||
          (item.projectProduct.productDetail.productCodeName &&
            item.projectProduct.productDetail.productCodeName
              .toLowerCase()
              .indexOf(key.toLowerCase()) > -1) ||
          (item.projectProduct.productDetail.versionName &&
            item.projectProduct.productDetail.versionName
              .toLowerCase()
              .indexOf(key.toLowerCase()) > -1)
      );
    } else {
      this.licebseReportsByEmail = JSON.parse(
        JSON.stringify(this.licebseReportsCopyByEmail)
      );
    }
  }
  back() {
    this.route.navigate(["report"]);
  }
}
