import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReviewerComponent } from './reviewer.component';
import { ReviwerUserComponent } from './reviwer-user/reviwer-user.component';
import { ProjectDetailReviwerComponent } from './project-detail-reviwer/project-detail-reviwer.component';
import { ProjectLogsReviwerComponent } from './project-logs-reviwer/project-logs-reviwer.component';
import { LicenceViewReviwerComponent } from './licence-view-reviwer/licence-view-reviwer.component';
import { ChangePasswordReviwerComponent } from './change-password-reviwer/change-password-reviwer.component';

const routes:Routes = [
  {
    path:'',
    component:ReviewerComponent,
    children:[
      {
        path:'',
        redirectTo:'reviewrusers',
        pathMatch:'full'
      },
      {
        path:'reviewrusers',
        component:ReviwerUserComponent
      },
      {
        path:'reviewrProjectDeatil',
        component:ProjectDetailReviwerComponent
      },
      {
        path:'reviewrProjectLog',
        component:ProjectLogsReviwerComponent
      },
      {
        path:'LicenceView',
        component:LicenceViewReviwerComponent
      },
      {
        path:'reviewrChangePassword',
        component:ChangePasswordReviwerComponent
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
export class ReviewerRoutingModule {

 }
