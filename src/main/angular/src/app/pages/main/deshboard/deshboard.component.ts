import { ProjectService } from "src/app/services/project/project.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-deshboard",
  templateUrl: "./deshboard.component.html",
  styleUrls: ["./deshboard.component.scss"],
})
export class DeshboardComponent implements OnInit {
  productCounts;
  constructor(private _projectService: ProjectService) {}

  ngOnInit() {
    this.getproductCountByStatus();
  }
  getproductCountByStatus() {
    this._projectService.productCountByStatus().subscribe((data) => {
      console.log(data);
      this.productCounts = data;
    });
  }
}
