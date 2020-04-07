import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { UserComponent } from './user/user.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { RoleComponent } from './role/role.component';
import { CreateRoleComponent } from './role/create-role/create-role.component';
const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: 'roles', component: RoleComponent },
      { path: 'roles/create', component: CreateRoleComponent },
      { path: 'roles/:id', component: CreateRoleComponent },
      { path: 'users', component: UserComponent },
      { path: 'users/create', component: CreateUserComponent },
      { path: 'users/:id', component: CreateUserComponent }
    ]
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MainRoutingModule { }
