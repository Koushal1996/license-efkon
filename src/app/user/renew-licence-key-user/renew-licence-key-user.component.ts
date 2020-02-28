import { Component, OnInit } from '@angular/core';
import { ProjectDetailServiceService } from 'src/app/main/project-detail/project-detail-service.service';

@Component({
  selector: 'app-renew-licence-key-user',
  templateUrl: './renew-licence-key-user.component.html',
  styleUrls: ['./renew-licence-key-user.component.scss']
})
export class RenewLicenceKeyUserComponent implements OnInit {

  customerName:any;
  constructor(private myServices: ProjectDetailServiceService) { }

  ngOnInit(): void {
this.customerName=this.myServices.ViewLog;
  }

}
