import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { UsersComponent } from './users/users.component';
import { LicenceComponent } from './licence/licence.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ViewLogsComponent } from './view-logs/view-logs.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { UpdateLicenceComponent } from './update-licence/update-licence.component';
import { RenewLicenceComponent } from './renew-licence/renew-licence.component';
import { GenerateLicenceComponent } from './generate-licence/generate-licence.component';

const routes:Routes = [
  {
    path:'',
    component:MainComponent,
    children:[
      {
        path:'',
        redirectTo:'users',
        pathMatch:'full'
      },
      {
        path:'users',
        component:UsersComponent
      },
      {
        path:'licence',
        component:LicenceComponent
      },
      {
        path:'projectDetail',
        component:ProjectDetailComponent
      },
      {
        path:'logs',
        component:ViewLogsComponent
      },
      {
        path:'changePsw',
        component:ChangePasswordComponent
      },
      {
        path:'createUser',
        component:CreateUserComponent
      },
      {
        path:'createProject',
        component:CreateProjectComponent
      },
      {
        path:'updateLicence',
        component:UpdateLicenceComponent
      },
      {
        path:'renewLicence',
        component:RenewLicenceComponent
      },
      {
        path:'generateLicence',
        component:GenerateLicenceComponent
      },
    ]

  }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],

})
export class MainRoutingModule {

 }
