import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcMaterialComponent } from './page/components/calc.material/calc.material.component';
import { DevicesComponent } from './page/components/devices/devices.component';
import { ConsultationComponent } from './page/components/consultation/consultation.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/CalcMaterial', 
    pathMatch: 'full'
  },
  {
    path:'CalcMaterial',
    component: CalcMaterialComponent
  },
  {
    path:'Devices',
    component: DevicesComponent
  },
  {
    path:'Consultation',
    component: ConsultationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
