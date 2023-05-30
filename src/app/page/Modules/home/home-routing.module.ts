import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CalcMaterialComponent } from './pages/calc.material/calc.material.component';
import { DevicesComponent } from './pages/devices/devices.component';
import { ConsultationComponent } from './pages/consultation/consultation.component';

const routes: Routes = [
  {
    path: '',
    component : HomeComponent,
    children: 
    [
      {
        path:'calmat', component: CalcMaterialComponent
      },
      {
        path:'device', component: DevicesComponent
      },
      {
        path:'consultation', component: ConsultationComponent
      },
      {
        path: '', redirectTo: 'calmat', pathMatch: 'full'
      }     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
