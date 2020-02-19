import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthguardGuard } from './authguard.guard';
import { ForgetPsswordComponent } from './forget-pssword/forget-pssword.component';


const routes: Routes = [
  {path:'', redirectTo:'login',  pathMatch:'full'},
  {path : 'login', component: LoginComponent},
  {path : 'forget', component: ForgetPsswordComponent},
  {path : 'main',  canActivate:[AuthguardGuard],  loadChildren: () => import('./main/main.module').then(m => m.MainModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
