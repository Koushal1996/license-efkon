import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from './../../../services/project/project.service';
import swal from 'sweetalert';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

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
  showModal: boolean = false
  popUpForm: FormGroup;
  commentValue: any;
  commentSubmitButton: string;
  selectedProdcut: any;
  constructor(private projectservice: ProjectService,
    private route: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.getProjects()
    this.popUpForm = this.initpopUpForm();
  }

  initpopUpForm() {
    return this.fb.group({
      "comment": [""]
    })
  }


  getProjects() {
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
            swal("Delete Successfully!");
            this.getProjects()
          },
            error => {
              console.log("error");
            })
        }
      });
  }
  editProduct(project, product) {
    this.projectservice.selecetedProduct.next(product);
    this.route.navigate([`projects/${project.id}/product/${product.id}`])
  }
  getProductsByProjectId(project) {
    console.log(project.id)
    this.projectservice.getProductsByProjectId(project.id).subscribe
      (data => {
        console.log(data)
        project.products = data
      })
  }
  onSubmitComment() {
    this.showModal = false;
    // console.log(this.popUpForm.value)
    // console.log(this.popUpForm.controls['Comment'].value)
    switch (this.commentSubmitButton) {
      case 'Submit':
        this.projectservice.submitProductStatus(this.selectedProdcut.id, this.popUpForm.value).subscribe(
          data => {
            console.log(data)
            console.log("submit")
            this.selectedProdcut.status = 'SUBMIT'
            swal("Submit successfully!");
          }
        )
        break;
      case 'Reject':
        this.projectservice.rejectProductStatus(this.selectedProdcut.id, this.popUpForm.value).subscribe(
          data => {
            console.log("rejected")
            this.selectedProdcut.status = 'REJECTED'
            swal("Reject successfully!");
          }
        )
        break;
      case 'Review':
        this.projectservice.reviewProductStatus(this.selectedProdcut.id, this.popUpForm.value).subscribe(
          data => {
            console.log("review")
            this.selectedProdcut.status = 'REVIEWED'
            swal("Review successfully!");
          }
        )
        break;
      case 'Approved':
        this.projectservice.approveProductStatus(this.selectedProdcut.id, this.popUpForm.value).subscribe(
          data => {
            console.log("approved")
            this.selectedProdcut.status = 'APPROVED'
            swal("Approved successfully!");
          }
        )
        break;
    }
  }
  submitProductStatus(pro) {
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to Submit this?",
      icon: "warning",
      closeOnClickOutside: false,
      buttons: ["Yes", "No"],
      dangerMode: true,
    })
      .then(willDelete => {
        if (willDelete) {
        }
        else {
          this.showModal = true;
          this.popUpForm.reset();
          this.commentSubmitButton = 'Submit'
          this.selectedProdcut = pro
        }
      });
  }
  reviewProductStatus(pro) {
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to Review this?",
      icon: "warning",
      closeOnClickOutside: false,
      buttons: ["Yes", "No"],
      dangerMode: true,
    })
      .then(willDelete => {
        if (willDelete) {
        }
        else {
          this.showModal = true;
          this.popUpForm.reset();
          this.commentSubmitButton = 'Review'
          this.selectedProdcut = pro
        }
      });
  }
  approveProductStatus(pro) {
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to Approved this?",
      icon: "warning",
      closeOnClickOutside: false,
      buttons: ["Yes", "No"],
      dangerMode: true,
    })
      .then(willDelete => {
        if (willDelete) {
        }
        else {
          this.showModal = true;
          this.popUpForm.reset();
          this.commentSubmitButton = 'Approved'
          this.selectedProdcut = pro
        }
      });
  }
  rejectProductStatus(pro) {
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to Reject this?",
      icon: "warning",
      closeOnClickOutside: false,
      buttons: ["Yes", "No"],
      dangerMode: true,
    })
      .then(willDelete => {
        if (willDelete) {
        }
        else {
          this.showModal = true;
          this.commentSubmitButton = 'Reject'
          this.selectedProdcut = pro;
          this.popUpForm.reset();
          this.popUpForm.addControl('comment', new FormControl('',Validators.required));

        }
      });
  }
  hide() {
    this.showModal = false;
  }

}
