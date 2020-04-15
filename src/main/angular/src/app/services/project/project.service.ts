import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private api:ApiService ) { }

  getProjects(){
    return this.api.get('api/projects');
  }
  addProject(data){
    return this.api.post('api/project', data)
  }
  getProduct(){
    return this.api.get('api/project/product')
  }
  addProduct(data){
    return this.api.post('api/project/product',data)
  }
  deleteProduct(Id){
    return this.api.delete(`api/project/product/${Id}`);
  }
  getProjectTypes(){
    return this.api.get('api/project/types');
  }
  getProjectManager(){
     return this.api.get('api/users/project-manager')
 }
  getCustomer(){
     return this.api.get('api/users/customer')
 }
}
