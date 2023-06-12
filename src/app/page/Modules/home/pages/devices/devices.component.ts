import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { NameUnit } from 'src/app/core/emuns/unitEnum';
import { amountId } from 'src/app/core/forms.models/AmountId';
import { DeviceFormCreate } from 'src/app/core/forms.models/deviceCreate.form';
import { AmountMat } from 'src/app/core/models/AmountMat.model';
import { Devices } from 'src/app/core/models/Devices.model';
import { Material } from 'src/app/core/models/Material.model';
import { DevicesSevice } from 'src/app/services/implementation/Devices-service';
import { MaterialServices } from 'src/app/services/implementation/Material-sevices';

@Component({
  selector: 'cfe-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  devices: Devices[] = [];
  getDevices!: Observable<Devices[]>;
  iscreate: boolean = false;
  isLoading: boolean = false;
  isdisable: boolean = false;
  contenedorStyles1: any = {};
  contenedorStyles2: any = {};
  formDevices: DeviceFormCreate;
  materialsasyng!: Observable<Material[]>;
  materials: Material[] = [];
  DeviceMateraial: [] = [];
  amoutMat: AmountMat[] = [];
  selectMat: amountId;
  seletAmourCreate: amountId[] = [];
  getNameUnit = NameUnit;
  unitMat: number= 5;
  constructor(private devicesSevice: DevicesSevice, private toastr: ToastrService, private materialServices: MaterialServices) {
    this.formDevices =
    {
      name: '',
      voltage: 0,
      isHeavy: null,
      isSemiInsulated: null,
      materials: []
    }
    this.selectMat =
    {
      id: '',
      amount: 0
    }
  }
  ngOnInit(): void {
    this.getDevices = this.devicesSevice.get();
    this.getDevice();
  }

  getDevice(): void {
    this.isLoading = true;
    this.getDevices.subscribe(response => {
      if (response.length != 0) {
        this.devices = response;
      }
      this.isLoading = false;
    });
  }
  addData(): void {
    this.contenedorStyles1 =
    {
      width: "45%",
      "border-right": "2px solid var(--color-secundario)",
    }
    this.contenedorStyles2 =
    {
      width: "100%"
    }
  }
  addMatrial(): void {
    if (this.formDevices.name != '' &&
      this.formDevices.voltage != 0 &&
      this.formDevices.isHeavy != null &&
      this.formDevices.isSemiInsulated != null) {

      this.isdisable = true;
      this.iscreate = true;
      this.getMaterials();
    }
    else {
      this.toastr.error('Rellene todo el formulario', 'Error');
    }
  }
  editarform(): void {
    this.isdisable = false;
    this.iscreate = false;
  }
  getMaterials(): void {
    this.isLoading = true;
    this.materialsasyng = this.materialServices.getMaterials()
    this.materialsasyng.subscribe(response => {
      if (response.length != 0) {
        this.materials = response.sort((a, b) => a.code - b.code);
      }
      this.isLoading = false;
    });
  }
  addMat() {
    if (this.selectMat.id != '' && this.selectMat.amount != 0) {
      var mat = this.materials.find(x => x.id == this.selectMat.id);
      if (mat != undefined) {
        var mater: AmountMat =
        {
          amount: this.selectMat.amount,
          material: mat
        }
        this.seletAmourCreate.push(this.selectMat);
        this.amoutMat.push(mater);
        this.materials = this.materials.filter(x => x.id != this.selectMat.id)
        this.selectMat =
        {
          id: '',
          amount: 0
        }
      }
    }
    else
    {
      this.toastr.error('Selecione un material y su cantidad', 'Error');
    }
  }
  Reset(): void {
    this.amoutMat = [];
    this.seletAmourCreate = []
    this.getMaterials();
    this.selectMat =
    {
      id: '',
      amount: 0
    }
    this.unitMat = 5;
  }
  crearMar(): void {
    this.formDevices.materials = this.seletAmourCreate;
    this.devicesSevice.add(this.formDevices)
    .subscribe(
      reponse => {
        if (reponse) {
          this.contenedorStyles2 ={}
          this.contenedorStyles1={}
          this.getDevice();
          this.Reset()
          this.editarform();
        }
        else {
          this.isLoading = false;
        }
      }
    );
  }
  onSelectorChange():void
  {
    var mat = this.materials.find(x => x.id == this.selectMat.id);
    if(mat)
    {
      this.unitMat = mat.unit;
    }
    
  }
}
