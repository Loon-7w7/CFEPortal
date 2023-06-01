import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { LoginService } from 'src/app/services/implementation/login-service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginService]
})
export class LoginModule { }
