import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AuthguardGuard } from './authguard.guard';
import { CreateProjectServiceService } from './main/create-project/create-project-service.service';
import { ForgetPsswordComponent } from './forget-pssword/forget-pssword.component';


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

  ],
  providers: [AuthguardGuard,CreateProjectServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
