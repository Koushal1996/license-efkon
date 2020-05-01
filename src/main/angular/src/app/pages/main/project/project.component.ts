import { StorageService } from './../../../services/storage/storage.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from './../../../services/project/project.service';
import swal from 'sweetalert';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
declare let $: any;
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  public projects = []
  isloader: boolean = true
  isProductloader: boolean = true
  projectsProduct: any;
  show: boolean = false
  showModal: boolean = false
  showCommentModal: boolean = false
  popUpForm: FormGroup;
  commentValue: any;
  commentSubmitButton: string;
  selectedProdcut: any;
  isNoProducts: boolean = false;
  comments =[]
  constructor(private projectservice: ProjectService,
    private _storageService:StorageService,
    private route: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.getProjects()
    this.popUpForm = this.initpopUpForm();
  }

  hasAuthority(authority){
    const authorities:any[] = this._storageService.getData('userAuthorities').map(a=>a.name);
    return authorities.includes(authority);
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
  getProductsByProjectId(event, project) {
    if ($(event)[0].ariaExpanded == null || $(event).hasClass("collapsed")) {
      project.productLoader = true
      this.projectservice.getProductsByProjectId(project.id).subscribe
        (data => {
          console.log(data)
          project.products = data;
          project.productLoader = false;    
        }, error => {
          project.productLoader = false;
        })
    }
  }
  onSubmitComment() {
    this.showModal = false;
    switch (this.commentSubmitButton) {
      case 'Submit':
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
              this.projectservice.submitProductStatus(this.selectedProdcut.id, this.popUpForm.value).subscribe(
                data => {
                  console.log(data)
                  console.log("submit")
                  this.selectedProdcut.status = 'SUBMIT'
                  swal("Submit successfully!");
                }
              )
            }
          });
        break;
      case 'Reject':
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
              this.projectservice.rejectProductStatus(this.selectedProdcut.id, this.popUpForm.value).subscribe(
                data => {
                  console.log("rejected")
                  this.selectedProdcut.status = 'REJECTED'
                  swal("Reject successfully!");
                }
              )
            }
          });
        break;
      case 'Review':
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
              this.projectservice.reviewProductStatus(this.selectedProdcut.id, this.popUpForm.value).subscribe(
                data => {
                  console.log("review")
                  this.selectedProdcut.status = 'REVIEWED'
                  swal("Review successfully!");
                }
              )
            }
          });
        break;
      case 'Approved':
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
              this.projectservice.approveProductStatus(this.selectedProdcut.id, this.popUpForm.value).subscribe(
                data => {
                  console.log("approved")
                  this.selectedProdcut.status = 'APPROVED'
                  swal("Approved successfully!");
                }
              )
            }
          });
        break;
    }
  }
  submitProductStatus(pro) {
    this.showModal = true;
    this.popUpForm.reset();
    this.commentSubmitButton = 'Submit'
    this.selectedProdcut = pro
  }
  reviewProductStatus(pro) {
    this.showModal = true;
    this.popUpForm.reset();
    this.commentSubmitButton = 'Review'
    this.selectedProdcut = pro
  }
  approveProductStatus(pro) {
    this.showModal = true;
    this.popUpForm.reset();
    this.commentSubmitButton = 'Approved'
    this.selectedProdcut = pro
  }
  rejectProductStatus(pro) {
    this.showModal = true;
    this.popUpForm.controls['comment'].setValidators(Validators.required);
    this.commentSubmitButton = 'Reject'
    this.selectedProdcut = pro;
    this.popUpForm.reset();
  }
  hide() {
    this.showModal = false;
  }
  hideCommentModel(){
    this.showCommentModal=false;
  }
  showComments(pro){
    
    this.comments = pro.comments
    console.log(this.comments) 
    if(this.comments.length > 0)
    {
      this.showCommentModal=true
    }
    else
    {
      swal("No Comments Found")
    }
  }
}
