import { ProjectService } from "./../../../../services/project/project.service";
import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-type",
  templateUrl: "./type.component.html",
  styleUrls: ["./type.component.scss"],
})
export class TypeComponent implements OnInit {
  projectTypes: any;

  constructor(private projectservice: ProjectService) {}

  ngOnInit() {
    this.projectservice.getProjectTypes().subscribe((data) => {
      this.projectTypes = data;
      console.log(data);
    });
  }
}
