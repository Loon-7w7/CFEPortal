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
  TableDiveceList: any[] = [];
  //datos de ejemplo
  dispositivos: any[] = [
    { id: 1, nombre: 'Dispositivo 1', clasificacion: 'baja tension' },
    { id: 2, nombre: 'Dispositivo 2', clasificacion: 'alta tension' },
    { id: 3, nombre: 'Dispositivo 3', clasificacion: 'baja tension' },
    { id: 4, nombre: 'Dispositivo 4', clasificacion: 'alta tension' },
    { id: 5, nombre: 'Dispositivo 5', clasificacion: 'baja tension' },
    { id: 6, nombre: 'Dispositivo 6', clasificacion: 'alta tension' },
    // ...otros dispositivos
  ];
  dispositivosBajaTension: any[];
  dispositivosAltaTension: any[];
  dispositivoSeleccionado = {};

  
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
    this.dispositivosBajaTension = this.dispositivos.filter(dispositivo => dispositivo.clasificacion === 'baja tension');
    this.dispositivosAltaTension = this.dispositivos.filter(dispositivo => dispositivo.clasificacion === 'alta tension');
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
  addDevice(id: any)
  {
    let dispositivo = {};
    this.TableDiveceList.push(this.dispositivos.find(element => element.id == id));
    console.log(this.TableDiveceList);
  }
  deleteDivice(id:any)
  {
    this.TableDiveceList = this.TableDiveceList.filter(elemento => elemento.id !== id)
  }
}
