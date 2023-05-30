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
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    HomeComponent,
    CalcMaterialComponent,
    DevicesComponent,
    ConsultationComponent,
    HeaderComponent,
    CreateMaterailModalComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
  ],
  providers:[]
})
export class HomeModule { }
