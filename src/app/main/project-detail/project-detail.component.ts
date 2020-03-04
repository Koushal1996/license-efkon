import { Component, OnInit } from '@angular/core';
import { ProjectDetailServiceService } from './project-detail-service.service';
import * as $ from 'jquery'
@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
myProjectDetail:any=[];
projectStatus:boolean
Searchvalue:number=1;
SortValue:number=1;
msg:boolean=false;
item=5;
  msg1: string;
  constructor(private _myServices:ProjectDetailServiceService) { }
  alerts:boolean=false
  // ngOnInit() function
  ngOnInit(): void {
    this.myProjectDetail=this._myServices.projectDetail;

  }
  // Delete Project Condition
  DeleteProject(i)
  {
   var date1 = new Date();
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

  OnProjectSubmit(i)
  {
this.projectStatus=!this.projectStatus;
  }
  // Get value for Search element
  OnselectSearch(event)
  {
    this.Searchvalue=event;
    console.log("Event in search "+event)
  }

  // Code For search
  onKeydownEvent() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td =tr[i].getElementsByTagName("td")[this.Searchvalue]  ;
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          this.msg1="Sorry, Data not available !!"
          tr[i].style.display = "";

        } else {
          tr[i].style.display = "none";
         this.msg=true
        }
      }
      else
      {

      }
    }
  }
  // Code For Sorting
  OnselectSortItem(event) {
    console.log("In search item"+event);
    if(event==5)
    {
      var table, rows, switching, i, x, y, shouldSwitch;
      table = document.getElementById("myTable");
      switching = true;
      while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
          shouldSwitch = false;
          x = rows[i].getElementsByTagName("TD")[event];
          y = rows[i + 1].getElementsByTagName("TD")[event];
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
        if (shouldSwitch) {
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
        }
      }
    }
    else{
      var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[event];
        y = rows[i + 1].getElementsByTagName("TD")[event];
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
    }

  }
  // Code for Pagination
  OnPagination(event)
  {
  this.item=event
  }
}
