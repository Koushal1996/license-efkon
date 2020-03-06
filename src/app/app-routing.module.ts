import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthguardGuard } from './authguard.guard';
import { ForgetPsswordComponent } from './forget-pssword/forget-pssword.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'forget', component: ForgetPsswordComponent },
  { path: 'main', canActivate: [AuthguardGuard], loadChildren: () => import('./main/main.module').then(m => m.MainModule) },
  { path: 'user', canActivate: [AuthguardGuard], loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'reviewer', canActivate: [AuthguardGuard], loadChildren: () => import('./reviewer/reviewer.module').then(m => m.ReviewerModule) },
  { path: 'approver', canActivate: [AuthguardGuard], loadChildren: () => import('./approver/approver.module').then(m => m.ApproverModule) },
  { path: '**', component: NotFoundPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
