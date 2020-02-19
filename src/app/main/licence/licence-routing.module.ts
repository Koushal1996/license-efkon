import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { LicenceComponent } from './licence.component';


// const routes:Routes =[
//   {
//     path:'',
//     component:LicenceComponent,
//     children:[
//      {
//       path:'',
//       redirectTo:'users',
//       pathMatch:'full'
//      },
//      {
//        path :'Licence',
//        component: LicenceComponent
//      }
//     ]

//   }
// ]
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class LicenceRoutingModule { }
