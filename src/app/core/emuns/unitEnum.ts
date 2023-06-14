export enum Unit
{
    PZA = 0,
    M = 1,
    KG = 2,
    JGO = 3,
    L = 4,
    vacio = 5
}
export const NameUnit = new Map<number, string>
(
    [
        [Unit.PZA, "Pieza"],
        [Unit.M, "Metro"],
        [Unit.KG, "Kilograno"],
        [Unit.JGO,"JGO"],
        [Unit.L, "Litro"],
        [Unit.vacio, ""]
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
export const NumUnitAbre = new Map<string,number>
(
    [
        ["PZA", Unit.PZA],
        ["M", Unit.M ],
        [ "NG",Unit.KG],
        ["JGO",Unit.JGO],
        [ "L",Unit.L]
    ]
);