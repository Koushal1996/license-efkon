import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from './../../../services/project/project.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  public projects = []
  isloader: boolean = true
  projectsProduct: any;
  show: boolean = false
  constructor(private projectservice: ProjectService,
    private route: Router) { }

  ngOnInit() {
    this.projectservice.getProjects().subscribe
      (data => {
        this.projects = data
        this.isloader = false
        console.log(data)
      },
        error => {
          console.log(error)
        })
  }

  createpProject() {
    this.route.navigate(['projects/create'])
  }

  addProduct(project) {
    this.route.navigate([`projects/${project.id}/product`])
    console.log(project)
  }
  deleteProduct(pro) {
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to deleted this?",
      icon: "warning",
      closeOnClickOutside: false,
      buttons: ["Yes", "No"],
      dangerMode: true,
    })
      .then(willDelete => {
        if (willDelete) {
        }
        else {
          this.projectservice.deleteProduct(pro.id).subscribe(data => {
            console.log(data)
            console.log("deletesucesful")
          },
            error => {
              console.log("error");
            })

        }
      });
  }
  editProduct(project,product){
    this.projectservice.selecetedProduct.next(product);
    this.route.navigate([`projects/${project.id}/product/${product.id}`])
  }
  getProductsByProjectId(project){
    console.log(project.id)
  this.projectservice.getProductsByProjectId(project.id).subscribe
  (data => {
    console.log(data)
   project.products = data
  })
}
}
