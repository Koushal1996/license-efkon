import { Router } from "@angular/router";
import { ProjectService } from "src/app/services/project/project.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-deshboard",
  templateUrl: "./deshboard.component.html",
  styleUrls: ["./deshboard.component.scss"],
})
export class DeshboardComponent implements OnInit {
  productCounts;
  statusvalue: any;
  isloader: boolean = true;

  constructor(private _projectService: ProjectService, private route: Router) {}

  ngOnInit() {
    this.getproductCountByStatus();
  }
  getproductCountByStatus() {
    this._projectService.productCountByStatus().subscribe(
      (data) => {
        console.log(data);
        this.productCounts = data;
        this.isloader = false;
      },
      (error) => {
        this.isloader = false;
      }
    );
  }
  getStatus(status) {
    //console.log(status);
    console.log(status.status);
    this.route.navigate(["dashboard", status.status.toLowerCase()]);
  }
}
