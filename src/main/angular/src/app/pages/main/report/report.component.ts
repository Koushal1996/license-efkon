import { ProductService } from "./../../../services/product/product.service";
import { Component, OnInit } from "@angular/core";
import { ProjectService } from "./../../../services/project/project.service";

@Component({
  selector: "app-report",
  templateUrl: "./report.component.html",
  styleUrls: ["./report.component.scss"],
})
export class ReportComponent implements OnInit {
  licebseReports: any;
  projects = [];
  licebseReportsByEmail: any;

  constructor(
    private productservice: ProductService,
    private projectservice: ProjectService
  ) {}

  ngOnInit() {
    this.productservice.getlicenseReport().subscribe((data) => {
      console.log(data);
      this.licebseReports = data;
    });
    this.getProjects();
  }
  getLicenseByEmail(report) {
    console.log(report);
    const customerEmail = this.projects.filter(
      (item) => item.customerName == report.customer_name
    );
    console.log(customerEmail);
    const onlyEmail = customerEmail.map((item) => item.customerEmail);
    console.log(onlyEmail);
    var first = onlyEmail[0];
    console.log(first);
    this.productservice.getlicenseReportbyEmail(first).subscribe((data) => {
      console.log(data);
      this.licebseReportsByEmail = data;
    });
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
