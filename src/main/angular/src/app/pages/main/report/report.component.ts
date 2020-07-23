import { ActivatedRoute, Router } from "@angular/router";
import { ReportService } from "./../../../services/report/report.service";
import { ProductService } from "./../../../services/product/product.service";
import { Component, OnInit } from "@angular/core";
import { ProjectService } from "./../../../services/project/project.service";
import * as FileSaver from "file-saver";
import { saveAs } from "file-saver";

import swal from "sweetalert";

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
  projectProductReportsByEmail: any;

  constructor(
    private productservice: ProductService,
    private projectservice: ProjectService,
    private reportservice: ReportService,
    private router: ActivatedRoute,
    private route: Router
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

  getProjectProductReportByEmail(report, event) {
    //console.log(event);
    report.productLoader = true;
    //report.ProductActive = true;
    //console.log(report);
    // console.log(report.name);
    var res = report.name.split("(");
    var arNAme = res[0];
    console.log(arNAme);
    var res2 = res[1].split(")");
    console.log(res2[0]);
    this.route.navigate([`report/${arNAme}/${res2[0]}/product`]);
  }

  getLicenseReportByEmail(report, event) {
    console.log(event);
    report.licenseLoader = true;
    //console.log(report);
    //console.log(report.name);
    var res = report.name.split("(");
    var arNAme = res[0];
    console.log(arNAme);
    var res2 = res[1].split(")");
    //console.log(res2[0]);
    this.route.navigate([`report/${arNAme}/${res2[0]}/license`]);
    //this.route.navigate(["report", res2[0]]);
  }
  getLicenseReportExcel(report) {
    var res = report.name.split("(");
    var res2 = res[1].split(")");
    console.log(res2[0]);
    this.reportservice.getLicenseReportExcel(res2[0]).subscribe(
      (data) => {
        console.log(data);
        const blob = new Blob([data.body], {
          type:
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });
        //FileSaver.saveAs(blob);
        const file = new File([blob], "LicenseReport" + res2[0] + ".xlsx", {
          type: "application/vnd.ms.excel",
        });
        saveAs(file);
      },
      (error) => {
        swal("error");
      }
    );
  }
  getProjectProductReportExcel(report) {
    var res = report.name.split("(");
    var res2 = res[1].split(")");
    console.log(res2[0]);
    this.reportservice.getProjectProductReportExcel(res2[0]).subscribe(
      (data) => {
        console.log(data);
        const blob = new Blob([data.body], {
          type:
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });
        const file = new File([blob], res2[0] + ".xlsx", {
          type: "application/vnd.ms.excel",
        });
        saveAs(file);
        //FileSaver.saveAs(blob);
      },
      (error) => {
        swal("Error");
      }
    );
  }
  getLicenseReportPdf(report) {
    var res = report.name.split("(");
    var res2 = res[1].split(")");
    console.log(res2[0]);
    this.reportservice.getLicenseReportPdf(res2[0]).subscribe(
      (data) => {
        console.log(data);
        const blob = new Blob([data.body], {
          type: "application/pdf;base64",
        });
        //FileSaver.saveAs(blob);
        const file = new File([blob], "LicenseReport" + res2[0] + ".pdf", {
          type: "application/pdf;base64",
        });
        saveAs(file);
      },
      (error) => {
        swal("Error");
      }
    );
  }
  getProjectProductReportPdf(report) {
    var res = report.name.split("(");
    var res2 = res[1].split(")");
    console.log(res2[0]);
    this.reportservice.getProjectProductReportPdf(res2[0]).subscribe(
      (data) => {
        console.log(data);
        const blob = new Blob([data.body], {
          type: "application/pdf;base64",
        });
        const file = new File([blob], res2[0] + ".pdf", {
          type: "application/pdf;base64",
        });
        saveAs(file);
        // FileSaver.saveAs(blob);
      },
      (error) => {
        swal("Error");
      }
    );
  }

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
