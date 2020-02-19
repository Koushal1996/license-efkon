import { Component, OnInit } from '@angular/core';
import { ProjectDetailServiceService } from '../project-detail/project-detail-service.service';

@Component({
  selector: 'app-view-logs',
  templateUrl: './view-logs.component.html',
  styleUrls: ['./view-logs.component.scss']
})
export class ViewLogsComponent implements OnInit {
logs:any;
  constructor(private _viewLog:ProjectDetailServiceService) { }

  ngOnInit(): void {
  this.logs=this._viewLog.ViewLog;
  }

}
