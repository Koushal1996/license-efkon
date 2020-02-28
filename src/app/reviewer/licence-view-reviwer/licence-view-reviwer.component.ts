import { Component, OnInit } from '@angular/core';
import { ProjectDetailServiceService } from 'src/app/main/project-detail/project-detail-service.service';

@Component({
  selector: 'app-licence-view-reviwer',
  templateUrl: './licence-view-reviwer.component.html',
  styleUrls: ['./licence-view-reviwer.component.scss']
})
export class LicenceViewReviwerComponent implements OnInit {

  logs:any;
  constructor(private _viewLog:ProjectDetailServiceService) { }

  ngOnInit(): void {
  this.logs=this._viewLog.ViewLog;
  }

}
