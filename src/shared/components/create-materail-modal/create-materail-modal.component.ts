import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Unit, NameUnit } from 'src/app/core/emuns/unitEnum';
import { CreateMaterrialFrom } from 'src/app/core/forms.models/CreateMaterial';


@Component({
  selector: 'cfe-create-materail-modal',
  templateUrl: './create-materail-modal.component.html',
  styleUrls: ['./create-materail-modal.component.css']
})
export class CreateMaterailModalComponent {
  formulario: CreateMaterrialFrom;
  units = [0,1,2,3,4] ;
  getnames = NameUnit ;
  @Output() guardarClick = new EventEmitter<CreateMaterrialFrom>();
  @Output() cancelarClick = new EventEmitter<boolean>();
  constructor(private toastr: ToastrService) {
    this.formulario = 
    {
      code: 0,
      name:'',
      area:'',
      hierarchy:'',
      unit:null,
      unirPrice:0
    }
  }
  guardar() {
    if (this.formulario.code != 0 
        && this.formulario.name != ''
        && this.formulario.area !=''
        && this.formulario. hierarchy !=''
        && this.formulario.unit != null
        && this.formulario.unit != 0) {
      const datosFormulario = this.formulario;
      datosFormulario.unit = Number(this.formulario.unit);
      this.guardarClick.emit(datosFormulario);
      this.ResetFomulario();
    }
    else
    {
      this.toastr.error('Debes llenar todos los campos del formulario', 'Advertencia')
    }
  }
  cancelar() {
    this.cancelarClick.emit(false);
    this.ResetFomulario();
  }
  ResetFomulario():void
  {
    this.formulario = 
    {
      code: 0,
      name:'',
      area:'',
      hierarchy:'',
      unit:null,
      unirPrice:0
    }
  }
}
