import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Material } from 'src/app/core/models/Material.model';
import { MaterialServices } from 'src/app/services/implementation/Material-sevices';
import { NameUnit } from 'src/app/core/emuns/unitEnum'
import { CreateMaterrialFrom } from 'src/app/core/forms.models/CreateMaterial';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
  getNameUnit = NameUnit;
  materialsasyng!: Observable<Material[]>;
  materials: Material[] = [];
  IsModalShow: boolean = false
  isLoading: boolean = false;
  constructor(private materialServices: MaterialServices
    , private toastr: ToastrService) { }

  ngOnInit() {
    this.getMaterials();
  }
  getMaterials(): void {
    this.isLoading = true;
    this.materialsasyng = this.materialServices.getMaterials()
    this.materialsasyng.subscribe(response => {
      this.materials = response.sort((a, b) => a.code - b.code);
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
            this.toastr.success('Se creo correctamente el material', 'operacion exitosa');
            this.IsModalShow = false;
            this.getMaterials();
          }
          else {
            this.toastr.error('Se produjo un error', 'Error')
            this.isLoading = false;
          }
        }
      );
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
          this.toastr.success('Se Elimino correctamente el material', 'operacion exitosa');
          this.getMaterials();
        }
        else
        {
          this.toastr.error('Se produjo un error', 'Error')
        }
        this.isLoading = false;
      }
    );
  }

}
