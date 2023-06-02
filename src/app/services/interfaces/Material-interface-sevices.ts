import { Observable } from "rxjs";
import { Material } from "src/app/core/models/Material.model";

export interface IMaterialService
{
    getMaterials():Observable<Material[]>
}