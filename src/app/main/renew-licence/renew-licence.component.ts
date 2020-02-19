import { Component, OnInit } from '@angular/core';
import { ProjectDetailServiceService } from '../project-detail/project-detail-service.service';

@Component({
  selector: 'app-renew-licence',
  templateUrl: './renew-licence.component.html',
  styleUrls: ['./renew-licence.component.scss']
})
export class RenewLicenceComponent implements OnInit {

  customerName:any;
  constructor(private myServices: ProjectDetailServiceService) { }

  ngOnInit(): void {
this.customerName=this.myServices.ViewLog;
  }
}
