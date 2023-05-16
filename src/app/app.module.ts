import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/shared/components/header/header.component';
import { CalcMaterialComponent } from './page/components/calc.material/calc.material.component';
import { DevicesComponent } from './page/components/devices/devices.component';
import { ConsultationComponent } from './page/components/consultation/consultation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CalcMaterialComponent,
    DevicesComponent,
    ConsultationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
