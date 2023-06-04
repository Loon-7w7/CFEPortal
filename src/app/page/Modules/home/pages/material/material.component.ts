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
  constructor(private materialServices: MaterialServices
    ,private toastr: ToastrService) { }

  ngOnInit() {
    this.getMaterials();
  }
  getMaterials():void
  {
    this.materialsasyng = this.materialServices.getMaterials()
    this.materialsasyng.subscribe(response =>
      {
         this.materials = response;
      });
  }
  showModal(isShow:boolean):void
  {
    this.IsModalShow = isShow;
  }
  createMateria(datos: CreateMaterrialFrom):void
  {
    this.materialServices.addMateria(datos).subscribe
    (
      reponse => 
      {
        if(reponse)
        {
          this.toastr.success('Se creo correctamente el material','operacion exitosa');
          this.IsModalShow = false;
          this.getMaterials();
        }
        else
        {
          this.toastr.error('Se produjo un error','Error')
        }
      }
    );
  }

}
