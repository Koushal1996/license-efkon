import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from './../../../services/project/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  public projects = []
  constructor(private projectservice:ProjectService,
    private route:Router) { }
    
  ngOnInit() {
    this.projectservice.getProjects().subscribe
    ( data => {
        console.log(data)
       
        this.projects = data
      },
      error => {
        console.log(error)
      } )
  }
   

  createpProject()
  {
    this.route.navigate(['projects/create'])
  }

}
