import { Component, OnInit } from '@angular/core';
import { ProjectDetailServiceService } from '../project-detail/project-detail-service.service';

@Component({
  selector: 'app-licence',
  templateUrl: './licence.component.html',
  styleUrls: ['./licence.component.scss']
})
export class LicenceComponent implements OnInit {
//  customerName:any;
//   constructor(private myServices: ProjectDetailServiceService) { }

//   ngOnInit(): void {
// this.customerName=this.myServices.ViewLog;
//   }
logs:any;
  constructor(private _viewLog:ProjectDetailServiceService) { }

  ngOnInit(): void {
  this.logs=this._viewLog.ViewLog;
  }

}
