import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AuthguardGuard } from './authguard.guard';
import { CreateProjectServiceService } from './main/create-project/create-project-service.service';
import { ForgetPsswordComponent } from './forget-pssword/forget-pssword.component';
import { NgSelect2Module } from 'ng-select2';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    ForgetPsswordComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // NgSelect2Module,
    ToastrModule.forRoot(),
    

  ],
  providers: [AuthguardGuard,CreateProjectServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
