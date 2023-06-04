import { Unit } from "../emuns/unitEnum";

export interface CreateMaterrialFrom
{
    code:number,
    name: string,
    area: string,
    hierarchy: string,
    unit: Unit|null,
    unirPrice:number
}