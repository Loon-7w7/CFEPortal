export enum Unit
{
    PZA = 0,
    M = 1,
    KG = 2,
    JGO = 3,
    L = 4
}
export const NameUnit = new Map<number, string>
(
    [
        [Unit.PZA, "Pieza"],
        [Unit.M, "Metro"],
        [Unit.KG, "Kilograno"],
        [Unit.JGO,"JGO"],
        [Unit.L, "Litro"]
    ]
);
export const NumUnit = new Map<string,number>
(
    [
        ["Pieza", Unit.PZA],
        ["Metro", Unit.M ],
        [ "Kilograno",Unit.KG],
        ["JGO",Unit.JGO],
        [ "Litro",Unit.L]
    ]
);