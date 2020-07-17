import { ReportService } from "./../../../services/report/report.service";
import { ProductService } from "./../../../services/product/product.service";
import { Component, OnInit } from "@angular/core";
import { ProjectService } from "./../../../services/project/project.service";

@Component({
  selector: "app-report",
  templateUrl: "./report.component.html",
  styleUrls: ["./report.component.scss"],
})
export class ReportComponent implements OnInit {
  licenseReports: any;
  projects = [];
  licebseReportsByEmail: any;
  isloader: boolean = true;

  constructor(
    private productservice: ProductService,
    private projectservice: ProjectService,
    private reportservice: ReportService
  ) {}

  ngOnInit() {
    this.reportservice.getProjectProductReport().subscribe(
      (data) => {
        console.log(data);
        this.licenseReports = data;
        this.isloader = false;
      },
      (error) => {
        this.isloader = false;
      }
    );
    this.getProjects();
  }

  getLicenseByEmail(report) {
    report.productLoader = true;

    //console.log(report);
    console.log(report.name);
    var res = report.name.split("(");
    //var arNAme = res[0];
    //console.log(arNAme);
    var res2 = res[1].split(")");
    console.log(res2[0]);

    this.reportservice.getProjectProductReportByEmail(res2[0]).subscribe(
      (data) => {
        console.log(data);
        this.licebseReportsByEmail = data;
        report.productLoader = false;
      },
      (error) => {
        report.productLoader = false;
      }
    );
  }

  // getLicenseByEmail(report) {
  //   report.productLoader = true;

  //   console.log(report);
  //   const customerEmail = this.projects.filter(
  //     (item) => item.customerName == report.customer_name
  //   );
  //   console.log(customerEmail);
  //   const onlyEmail = customerEmail.map((item) => item.customerEmail);
  //   console.log(onlyEmail);
  //   var first = onlyEmail[0];
  //   console.log(first);
  //   this.productservice.getlicenseReportbyEmail(first).subscribe(
  //     (data) => {
  //       console.log(data);
  //       this.licebseReportsByEmail = data;
  //       report.productLoader = false;
  //     },
  //     (error) => {
  //       report.productLoader = false;
  //     }
  //   );
  // }
  getProjects() {
    this.projectservice.getProjects().subscribe(
      (data) => {
        // console.log(data);
        this.projects = data;
      },
      (error) => {}
    );
  }
}
