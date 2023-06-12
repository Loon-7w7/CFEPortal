import { AmountMat } from "./AmountMat.model"

export interface Devices {
    name: string,
    voltage: number,
    isHeavy: boolean,
    isSemiInsulated: boolean,
    id: string
    createDate: Date,
    updateDate: Date,
    materials: AmountMat[]
}