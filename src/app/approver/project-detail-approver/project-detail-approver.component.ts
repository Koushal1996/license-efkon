import { Component, OnInit } from '@angular/core';
import { ProjectDetailServiceService } from 'src/app/main/project-detail/project-detail-service.service';

@Component({
  selector: 'app-project-detail-approver',
  templateUrl: './project-detail-approver.component.html',
  styleUrls: ['./project-detail-approver.component.scss']
})
export class ProjectDetailApproverComponent implements OnInit {
  myProjectDetail: any = [];
  constructor(private _myServices: ProjectDetailServiceService) { }
  alerts: boolean = false
  ngOnInit(): void {
    this.myProjectDetail = this._myServices.projectDetail
  }
  DeleteProject(i) {
    var date1 = new Date();
    //  var date1 = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var date2 = this.myProjectDetail[i].EndDate
    var date3 = new Date(date2)
    if (+date1 <= +date3) {
      alert('Can not be delete !!')
    }
    else {
      let val = confirm("Are you sure ?")
      if (val) {
        this.myProjectDetail.splice(i, 1);
      }
    }
  }

}
