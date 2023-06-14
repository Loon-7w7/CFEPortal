import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Material } from 'src/app/core/models/Material.model';
import { MaterialServices } from 'src/app/services/implementation/Material-sevices';
import { NameUnit,NumUnitAbre } from 'src/app/core/emuns/unitEnum'
import { CreateMaterrialFrom } from 'src/app/core/forms.models/CreateMaterial';
import * as XLSX from 'xlsx';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
  getNameUnit = NameUnit;
  getUnitAbrev = NumUnitAbre;
  materialsasyng!: Observable<Material[]>;
  materials: Material[] = [];
  IsModalShow: boolean = false
  isLoading: boolean = false;
  showConfirmation = false;
  idDelete: string ='';
  ExcelCarga:boolean = false;
  MatExcel: CreateMaterrialFrom[] = []
  constructor(private materialServices: MaterialServices,private toastr: ToastrService) { }

  ngOnInit() {
    this.getMaterials();
  }
  getMaterials(): void {
    this.isLoading = true;
    this.materialsasyng = this.materialServices.getMaterials()
    this.materialsasyng.subscribe(response => {
      if(response.length != 0)
      {
        this.materials = response.sort((a, b) => a.code - b.code);
      }
      this.isLoading = false;
    });
  }
  showModal(isShow: boolean): void {
    this.IsModalShow = isShow;
  }
  createMateria(datos: CreateMaterrialFrom): void {
    this.isLoading = true;
    this.materialServices.addMateria(datos).subscribe
      (
        reponse => {
          if (reponse) {
            this.IsModalShow = false;
            this.getMaterials();
          }
          else {
            this.isLoading = false;
          }
        }
      );
  }
  createMultiMateria(datos: CreateMaterrialFrom[]): void {
    this.isLoading = true;
    if (datos.length != 0) {
      this.materialServices.addMultiMateria(datos).subscribe
      (
        reponse => {
          if (reponse) {
            this.IsModalShow = false;
            this.getMaterials();
          }
          else {
            this.isLoading = false;
          }
          this.MatExcel = [];
          this.ExcelCarga = false
        }
      );
    }
    else
    {
      this.toastr.error('No se Encontro datos en el archivo','Error');
    }
  }
  deleteMateria(id:string):void
  {
    this.isLoading = true;
    this.materialServices.delete(id)
    .subscribe(
      response => 
      {
        if(response)
        {
          this.getMaterials();
        }
        this.isLoading = false;
        this.idDelete =''
        this.cancelDelete()
      }
    );
  }
  cancelDelete() {
    this.showConfirmation = false;
    this.idDelete ='';
    this.ExcelCarga = false;
    this.MatExcel = [];
  }
  showConfirmationModal(id:string) {
    this.idDelete = id;
    this.showConfirmation = true;
  }
  cargarArchivo(event: any): void 
  {
    const file: File = event.target.files[0];
  const fileReader: FileReader = new FileReader();
  fileReader.onload = (e: any) => {
    const data: Uint8Array = new Uint8Array(e.target.result);
    const workbook: XLSX.WorkBook = XLSX.read(data, { type: 'array' });

    // Aquí puedes procesar el archivo de Excel
    // y extraer los datos de la tabla que necesites.
    // Por ejemplo:
    const sheetName: string = workbook.SheetNames[0];
    const worksheet: XLSX.WorkSheet = workbook.Sheets[sheetName];
    const jsonData: any[] = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    this.MatExcel = this.obtenerMaterialesDesdeJson(jsonData);
    this.ExcelCarga = true;
  };
  fileReader.readAsArrayBuffer(file);
  }

  obtenerMaterialesDesdeJson(jsonData: any[][]): CreateMaterrialFrom[] {
    const materiales: CreateMaterrialFrom[] = [];
  
    // Iterar sobre cada fila del JSON
    for (let i = 1; i < jsonData.length; i++) {
      const fila = jsonData[i];
  
      // Obtener los valores de cada columna
      const code = Number.parseInt(fila[0]);
      const name = fila[1]
      const unit = NumUnitAbre.get(fila[2]);
      const unirPrice = Number.parseFloat(fila[5]);
      if(unit != undefined){
      // Crear objeto Material y agregarlo a la lista
      const material: CreateMaterrialFrom = {
        code,
        name,
        unit,
        unirPrice,
      };
      materiales.push(material);
      }
    }
  
    return materiales;
  }
}
