import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { UserComponent } from './user/user.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { RoleComponent } from './role/role.component';
import { CreateRoleComponent } from './role/create-role/create-role.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MainRoutingModule,ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  declarations: [MainComponent, UserComponent, CreateUserComponent, RoleComponent, CreateRoleComponent]
})
export class MainModule { }
