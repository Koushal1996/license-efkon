import { Component, OnInit } from '@angular/core';
import { ProjectDetailServiceService } from '../project-detail/project-detail-service.service';

@Component({
  selector: 'app-user-requests',
  templateUrl: './user-requests.component.html',
  styleUrls: ['./user-requests.component.scss']
})
export class UserRequestsComponent implements OnInit {

  logs:any;
  constructor(private _viewLog:ProjectDetailServiceService) { }

  ngOnInit(): void {
  this.logs=this._viewLog.ViewLog;
  }

}
