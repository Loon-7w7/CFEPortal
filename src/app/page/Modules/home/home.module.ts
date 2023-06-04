import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CalcMaterialComponent } from './pages/calc.material/calc.material.component';
import { DevicesComponent } from './pages/devices/devices.component';
import { ConsultationComponent } from './pages/consultation/consultation.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from 'src/shared/components/header/header.component';
import { CreateMaterailModalComponent } from 'src/shared/components/create-materail-modal/create-materail-modal.component';
import { LoginService } from 'src/app/services/implementation/login-service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MaterialComponent } from './pages/material/material.component';
import { MaterialServices } from 'src/app/services/implementation/Material-sevices';
import { AuthInterceptor } from 'src/app/core/interceptor/auth.interceptor';
import { SpinnerComponent } from 'src/shared/components/spinner/spinner.component';


@NgModule({
  declarations: [
    HomeComponent,
    CalcMaterialComponent,
    DevicesComponent,
    ConsultationComponent,
    HeaderComponent,
    MaterialComponent,
    CreateMaterailModalComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[LoginService,MaterialServices,{provide: HTTP_INTERCEPTORS,useClass: AuthInterceptor,multi: true}]
})
export class HomeModule { }
