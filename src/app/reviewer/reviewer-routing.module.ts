import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReviewerComponent } from './reviewer.component';
import { ReviwerUserComponent } from './reviwer-user/reviwer-user.component';

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
