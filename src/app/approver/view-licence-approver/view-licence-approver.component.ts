import { Component, OnInit } from '@angular/core';
import { ProjectDetailServiceService } from 'src/app/main/project-detail/project-detail-service.service';

@Component({
  selector: 'app-view-licence-approver',
  templateUrl: './view-licence-approver.component.html',
  styleUrls: ['./view-licence-approver.component.scss']
})
export class ViewLicenceApproverComponent implements OnInit {
  logs:any;
  constructor(private _viewLog:ProjectDetailServiceService) { }
  ngOnInit(): void {
  this.logs=this._viewLog.ViewLog;
  }


}
