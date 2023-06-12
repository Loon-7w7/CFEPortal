import { amountId } from "./AmountId";

export interface DeviceFormCreate
{
    name: string,
    voltage: number,
    isHeavy: boolean|null,
    isSemiInsulated: boolean|null,
    materials: amountId[]
}