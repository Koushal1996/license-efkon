import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ProjectService } from "src/app/services/project/project.service";

@Component({
  selector: "app-selected-licenses",
  templateUrl: "./selected-licenses.component.html",
  styleUrls: ["./selected-licenses.component.scss"],
})
export class SelectedLicensesComponent implements OnInit {
  selectedProjectId: any;
  licenses: any;

  constructor(
    private activate: ActivatedRoute,
    private route: Router,
    private projectservice: ProjectService
  ) {}

  ngOnInit() {
    this.activate.params.subscribe((params) => {
      this.selectedProjectId = params["id"];
    });

    this.projectservice.getProjectLicenseById(this.selectedProjectId).subscribe(
      (data) => {
        console.log(data);
        this.licenses = data;
      },
      (error) => {
        this.route.navigate([`projects`]);
      }
    );
  }
}
