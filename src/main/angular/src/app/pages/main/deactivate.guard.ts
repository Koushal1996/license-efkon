import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateRoleComponent } from './role/create-role/create-role.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { CreateProjectComponent } from './project/create-project/create-project.component';


@Injectable({
  providedIn: 'root'
})


// export class DeactivateGuard implements CanDeactivate<CreateRoleComponent | CreateUserComponent | CreateProjectComponent>{
//   canDeactivate():boolean{
      
//     //return window.confirm("do you really want to leave this page ?"); 
//  return true
//   }
  
// }
export class DeactivateGuard implements CanDeactivate<CreateRoleComponent>{
  canDeactivate(component:CreateRoleComponent):boolean{
      if(component.createRoleForm.dirty)
      {
       return confirm("do you really want to leave this page ?")
      }
      else if(component.createRoleForm.valid){
        return true
      }
    }
  }
