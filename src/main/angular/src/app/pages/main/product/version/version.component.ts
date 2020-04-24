import { ProductService } from './../../../../services/product/product.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss']
})
export class VersionComponent implements OnInit {
  Versions = [];
  versionId;
  createVersionForm: FormGroup;
  isCreateVersion: boolean = false
  isloader:boolean= true

  //isVersionTable: boolean = true
  constructor(
    private _productservice: ProductService,
    private fb: FormBuilder,
    private activate: ActivatedRoute) { }

  ngOnInit() {
    this.getversions();
    this.createVersionForm = this.initProjectForm();
   
  }

  getversions() {
    this._productservice.getVersions().subscribe(data => {
      console.log(data)
      this.Versions = data
      this.isloader = false

    })
  }
  initProjectForm() {
    return this.fb.group({
      "version": ["", [Validators.required]],
    });
  }
  onSubmit() {
    if (this.versionId) {
      this._productservice.updateVersions(this.versionId, this.createVersionForm.value)
        .subscribe(data => {
          swal("Update successfully!");
          this.getversions()
          this.isCreateVersion = false
        })
    }
    else {
      this._productservice.addVersions(this.createVersionForm.value).
        subscribe(data => {
          swal("Add successfully!");
          this.getversions()
          this.createVersionForm.reset()
          this.isCreateVersion = false
        },
          error => {
          })
    }
  }
  deleteVersion(version) {
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
          this._productservice.deleteVersions(version.id).subscribe(data => {

            this.getversions()
            swal("Delete successfully!");
          },
            error => {
            })

        }
      });
  }
  editVersion(version) {
    this.isCreateVersion = true
    //console.log(version.version)
    this.versionId = version.id
    this.createVersionForm.patchValue({
      version: version.version
    })
  }
  showVersionForm() {
    this.isCreateVersion = true
  }

}
