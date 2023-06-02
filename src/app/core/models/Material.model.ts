import { Data } from "@angular/router";
import { Unit } from "../emuns/unitEnum";

export interface Material
{
    code: number,
    name: string,
    area: string,
    hierarchy: string,
    unit: Unit,
    unirPrice: number
    id:string
    createDate: Data,
    updateDate: Data
}