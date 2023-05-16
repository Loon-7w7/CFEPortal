import { Component } from '@angular/core';
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
  constructor() {
    this.calcInfo = {
      number: null,
      year: null,
      name: '',
      description: '',
      voltage: null,
      semiisolated: false,
      heavy: false
    };
  }

  onSubmit() {
    console.log(this.calcInfo);
    this.showTableData = true;
  }
}
