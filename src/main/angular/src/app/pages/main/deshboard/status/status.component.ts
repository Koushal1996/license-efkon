import { ProjectService } from "src/app/services/project/project.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-status",
  templateUrl: "./status.component.html",
  styleUrls: ["./status.component.scss"],
})
export class StatusComponent implements OnInit {
  productStatusValue: any;
  projectProducts: any;

  constructor(
    private activate: ActivatedRoute,
    private _projectService: ProjectService,
    private route: Router
  ) {}

  ngOnInit() {
    this.activate.params.subscribe((params) => {
      this.productStatusValue = params["status"];
      console.log(this.productStatusValue);
      if (this.productStatusValue) {
        this.productStatusValue = this.productStatusValue.toUpperCase();
      }
    });
    console.log(this.productStatusValue);
    this.countsOfProductStatus();
  }

  countsOfProductStatus() {
    this._projectService
      .countsOfProductStatus(this.productStatusValue)
      .subscribe((data) => {
        console.log(data);
        this.projectProducts = data;
      });
  }
  hasExpired(project) {
    let currentDate = new Date().toISOString().split("T")[0];
    //console.log("current" + currentDate);
    // console.log("end" + project.endDate);
    if (currentDate >= project.endDate) {
      //return false;
      return true;
    } else {
      //return true;
      return false;
    }
  }
  onBack() {
    this.route.navigate(["dashboard"]);
  }
}
