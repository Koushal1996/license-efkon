import { ProductService } from './../../../../services/product/product.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss']
})
export class VersionComponent implements OnInit {
  Versions=[];
  versionid;
  createVersionForm: FormGroup;
  constructor(
    private _productservice: ProductService,
    private fb: FormBuilder,
    private activate:ActivatedRoute ) { }
  
  ngOnInit() {
    this.getversions();
    this.createVersionForm = this.initProjectForm();
  }

  getversions() {
    this._productservice.getVersions().subscribe(data => {
      console.log(data)
      this.Versions = data
    })
  }
  initProjectForm() {
    return this.fb.group({
      "version": ["", [Validators.required]],
    });
  }
  onSubmit() {
    if(this.versionid)
    {
    this._productservice.updateVersions(this.versionid,this.createVersionForm.value)
    .subscribe(data=>{
        this.getversions()
      })
    }
    else
    {
    this._productservice.addVersions(this.createVersionForm.value).
      subscribe(data => {
        this.getversions()
        this.createVersionForm.reset()
      },
        error => {
        } )
   }
  }
  deleteVersion(version) {
  this._productservice.deleteVersions(version.id).subscribe(data=>{
    this.getversions() 
  },
  error => {

  } )
  }
  editVersion(version){
     //console.log(version.version)
     this.versionid= version.id
     this.createVersionForm.patchValue({
      version:version.version
     })
  }
}
