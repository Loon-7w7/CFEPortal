import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CalcInfoForm } from 'src/app/core/forms.models/Calc.Info.Form.model';

@Component({
  selector: 'cfe-calc.material',
  templateUrl: './calc.material.component.html',
  styleUrls: ['./calc.material.component.css']
})
export class CalcMaterialComponent {

  name: string = "";
  calcInfo: CalcInfoForm;
  showTableData = false;
  isFormDisabled = false;
  constructor(private toastr: ToastrService) {
    this.calcInfo = {
      number: null,
      year: null,
      name: null,
      description: null,
      voltage: null,
      semiisolated: null,
      heavy: null
    };
  }

  onSubmit() {
    if (this.formValidator()) {
      console.log(this.calcInfo);
      this.showTableData = true;
      this.isFormDisabled = true;
    }
    else {
      this.toastr.error(this.getMessageAlerteErrorForm(), 'Los siguinetes datos son requeridos:')
    }
  }
  formValidator(): boolean {
    let respose = true;
    if (
      this.calcInfo.number == null ||
      this.calcInfo.name == null ||
      this.calcInfo.description == null ||
      this.calcInfo.year == null ||
      this.calcInfo.voltage == null ||
      this.calcInfo.semiisolated == null ||
      this.calcInfo.heavy == null
    ) {
      respose = false
    }
    return respose;
  }
  getMessageAlerteErrorForm(): string {
    let message = '';
    if (this.calcInfo.number == null) {
      message += '-Numero-'
    }
    if (this.calcInfo.name == null) {
      message += '-Nombre-'
    }
    if (this.calcInfo.description == null) {
      message += '-Descripcion-'
    }
    if (this.calcInfo.year == null) {
      message += '-Año-'
    }
    if (this.calcInfo.voltage == null) {
      message += '-Voltaje-'
    }
    if (this.calcInfo.semiisolated == null) {
      message += '-Semi aislado-'
    }
    if (this.calcInfo.heavy == null) {
      message += '-Pesado-'
    }
    return message;
  }
}
