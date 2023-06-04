import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Material } from 'src/app/core/models/Material.model';
import { MaterialServices } from 'src/app/services/implementation/Material-sevices';
import { NameUnit } from 'src/app/core/emuns/unitEnum'
import { CreateMaterrialFrom } from 'src/app/core/forms.models/CreateMaterial';

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
  constructor(private materialServices: MaterialServices) { }

  ngOnInit() {
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
    console.log(datos);
    this.IsModalShow = false;
  }

}
