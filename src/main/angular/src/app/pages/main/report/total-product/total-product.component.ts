import { ReportService } from "./../../../../services/report/report.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-total-product",
  templateUrl: "./total-product.component.html",
  styleUrls: ["./total-product.component.scss"],
})
export class TotalProductComponent implements OnInit {
  CustomerEmail: any;
  projectProductReportsByEmail: any;
  CustomerName: any;
  isLoader: boolean = true;
  projectProductReportsCopyByEmail: any;
  searchProjectProductsForm: any;
  productType: any;
  filterproductType: any[] = [];
  filterProjectTypeForm: any;

  constructor(
    private reportservice: ReportService,
    private activate: ActivatedRoute,
    private fb: FormBuilder,
    private route: Router
  ) {}

  ngOnInit() {
    this.activate.params.subscribe((params) => {
      //console.log(params);
      this.CustomerEmail = params["email"];
      //console.log(this.CustomerEmail);
      this.CustomerName = params["name"];
      //console.log(this.CustomerName);
    });
    this.reportservice
      .getProjectProductReportByEmail(this.CustomerEmail)
      .subscribe(
        (data) => {
          //console.log(data);
          this.projectProductReportsByEmail = data;
          this.projectProductReportsCopyByEmail = data;
          this.isLoader = false;
          this.productType = this.projectProductReportsCopyByEmail.map(
            (item) => item.project.projectTypeName
          );
          let count = 0;
          let start = false;
          for (var j = 0; j < this.productType.length; j++) {
            for (var k = 0; k < this.filterproductType.length; k++) {
              if (this.productType[j] == this.filterproductType[k]) {
                start = true;
              }
            }
            count++;
            if (count == 1 && start == false) {
              this.filterproductType.push(this.productType[j]);
            }
            start = false;
            count = 0;
          }
          console.log(this.filterproductType);
          console.log(this.productType);
        },
        (error) => {
          this.isLoader = false;
        }
      );
    this.searchProjectProductsForm = this.fb.group({
      Search: [""],
    });
    this.filterProjectTypeForm = this.fb.group({
      ProjectType: [""],
    });
  }

  onsearchProjectProductsForm(key) {
    if (key) {
      this.projectProductReportsByEmail = this.projectProductReportsCopyByEmail.filter(
        (item) =>
          // console.log(item)
          item.expirationPeriodType.toLowerCase().indexOf(key.toLowerCase()) >
            -1 ||
          item.licenseTypeName.toLowerCase().indexOf(key.toLowerCase()) > -1 ||
          item.project.projectTypeName
            .toLowerCase()
            .indexOf(key.toLowerCase()) > -1 ||
          item.productDetail.productFamilyName
            .toLowerCase()
            .indexOf(key.toLowerCase()) > -1 ||
          item.productDetail.productCodeName
            .toLowerCase()
            .indexOf(key.toLowerCase()) > -1 ||
          item.productDetail.versionName
            .toLowerCase()
            .indexOf(key.toLowerCase()) > -1
      );
    } else {
      this.projectProductReportsByEmail = JSON.parse(
        JSON.stringify(this.projectProductReportsCopyByEmail)
      );
    }
  }
  getProjectType() {
    this.projectProductReportsByEmail = this.projectProductReportsCopyByEmail;
    let key = this.filterProjectTypeForm.controls["ProjectType"].value;
    if (key) {
      this.projectProductReportsByEmail = this.projectProductReportsCopyByEmail.filter(
        (item) => item.project.projectTypeName == key
      );
    } else {
      this.projectProductReportsByEmail = this.projectProductReportsCopyByEmail;
    }
    if (key == "All") {
      this.projectProductReportsByEmail = this.projectProductReportsCopyByEmail;
    }
  }
  back() {
    this.route.navigate(["report"]);
  }
}
