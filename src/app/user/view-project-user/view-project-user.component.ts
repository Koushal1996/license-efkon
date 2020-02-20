import { Component, OnInit } from '@angular/core';
import { ProjectDetailServiceService } from 'src/app/main/project-detail/project-detail-service.service';

@Component({
  selector: 'app-view-project-user',
  templateUrl: './view-project-user.component.html',
  styleUrls: ['./view-project-user.component.scss']
})
export class ViewProjectUserComponent implements OnInit {

  myProjectDetail:any=[];

  constructor(private _myServices:ProjectDetailServiceService) { }
  alerts:boolean=false
  ngOnInit(): void {
    this.myProjectDetail=this._myServices.projectDetail
  }
  DeleteProject(i)
  {
   var date1 = new Date();
  //  var date1 = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
   var date2=this.myProjectDetail[i].EndDate
   var date3=new Date(date2)
if(+date1 <= +date3)
{
  alert('Can not delete')
}
else
{
  let val=confirm("Are you sure ?")
if(val)
{
  this.myProjectDetail.splice(i,1);
}


}
  }
}
