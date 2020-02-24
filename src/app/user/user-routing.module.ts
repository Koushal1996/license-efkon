import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { GenerateLicenceUserComponent } from './generate-licence-user/generate-licence-user.component';
import { UserModule } from './user.module';
import { RenewLicenceKeyUserComponent } from './renew-licence-key-user/renew-licence-key-user.component';
import { RequestLicenceKeyUserComponent } from './request-licence-key-user/request-licence-key-user.component';
import { UpdateLicenceKeyUserComponent } from './update-licence-key-user/update-licence-key-user.component';
import { ViewProjectUserComponent } from './view-project-user/view-project-user.component';
import { ViewLicenceKeylogsUserComponent } from './view-licence-keylogs-user/view-licence-keylogs-user.component';
import { ChnagePasswordUserComponent } from './chnage-password-user/chnage-password-user.component';
import { ViewLicenceUserComponent } from './view-licence-user/view-licence-user.component';
import { RequestStatusComponent } from './request-status/request-status.component';
import { UpdateRequestComponent } from './update-request/update-request.component';

const routes:Routes = [
  {
    path:'',
    component:UserComponent,
    children:[
      {
        path:'',
        redirectTo:'viewProjectUser',
        pathMatch:'full'
      },
      {
        path:'generateLicence',
        component:GenerateLicenceUserComponent
      },
      {
        path:'renewUser',
        component:RenewLicenceKeyUserComponent
      },
      {
        path:'requestUser',
        component:RequestLicenceKeyUserComponent
      },
      {
        path:'updateUser',
        component:UpdateLicenceKeyUserComponent
      },
      {
        path:'viewProjectUser',
        component:ViewProjectUserComponent
      },
      {
        path:'viewLicenceskeyLogsUser',
        component:ViewLicenceKeylogsUserComponent
      },
      {
        path:'changeUserpsw',
        component:ChnagePasswordUserComponent
      },
      {
        path:'viewUserLicence',
        component:ViewLicenceUserComponent
      },
      {
        path:'requestStatus',
        component:RequestStatusComponent
      },
      {
        path:'updateRequest',
        component:UpdateRequestComponent
      },
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule {

 }
