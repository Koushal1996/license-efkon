import { Component, OnInit } from '@angular/core';
import { ProjectDetailServiceService } from 'src/app/main/project-detail/project-detail-service.service';

@Component({
  selector: 'app-generate-licence-user',
  templateUrl: './generate-licence-user.component.html',
  styleUrls: ['./generate-licence-user.component.scss']
})
export class GenerateLicenceUserComponent implements OnInit {
  customerName:any;
  constructor(private myServices: ProjectDetailServiceService) { }

  ngOnInit(): void {
this.customerName=this.myServices.ViewLog;
  }

}
