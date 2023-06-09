import { Unit } from "../emuns/unitEnum";

export interface CreateMaterrialFrom
{
    code:number,
    name: string,
    unit: Unit|null,
    unirPrice:number
}