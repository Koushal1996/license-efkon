import { Component, OnInit } from '@angular/core';
import { ProjectDetailServiceService } from '../project-detail/project-detail-service.service';

@Component({
  selector: 'app-generate-licence',
  templateUrl: './generate-licence.component.html',
  styleUrls: ['./generate-licence.component.scss']
})
export class GenerateLicenceComponent implements OnInit {

  customerName:any;
  constructor(private myServices: ProjectDetailServiceService) { }

  ngOnInit(): void {
this.customerName=this.myServices.ViewLog;
  }

}
