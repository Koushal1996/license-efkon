import { Component, OnInit } from '@angular/core';
import { ProjectDetailServiceService } from 'src/app/main/project-detail/project-detail-service.service';

@Component({
  selector: 'app-view-licence-keylogs-user',
  templateUrl: './view-licence-keylogs-user.component.html',
  styleUrls: ['./view-licence-keylogs-user.component.scss']
})
export class ViewLicenceKeylogsUserComponent implements OnInit {

  logs:any;
  constructor(private _viewLog:ProjectDetailServiceService) { }

  ngOnInit(): void {
  this.logs=this._viewLog.ViewLog;
  }

}
