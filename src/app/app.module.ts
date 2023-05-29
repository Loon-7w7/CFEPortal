import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/shared/components/header/header.component';
import { CreateMaterailModalComponent } from 'src/shared/components/create-materail-modal/create-materail-modal.component';
import { CalcMaterialComponent } from './page/components/calc.material/calc.material.component';
import { DevicesComponent } from './page/components/devices/devices.component';
import { ConsultationComponent } from './page/components/consultation/consultation.component';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CalcMaterialComponent,
    DevicesComponent,
    ConsultationComponent,
    CreateMaterailModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [provideAnimations(), provideToastr()],
  bootstrap: [AppComponent]
})
export class AppModule { }
