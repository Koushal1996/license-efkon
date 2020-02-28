import { Component, OnInit } from '@angular/core';
import { ProjectDetailServiceService } from 'src/app/main/project-detail/project-detail-service.service';

@Component({
  selector: 'app-view-licence-user',
  templateUrl: './view-licence-user.component.html',
  styleUrls: ['./view-licence-user.component.scss']
})
export class ViewLicenceUserComponent implements OnInit {
  logs:any;
  constructor(private _viewLog:ProjectDetailServiceService) { }

  ngOnInit(): void {
  this.logs=this._viewLog.ViewLog;
  }

}
