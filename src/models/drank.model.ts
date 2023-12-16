import { RowDataPacket } from "mysql2"

export default interface Drank extends RowDataPacket {
    id?: number;
    naam?: string;
    huidigePrijs?: number;
    vorigePrijs?: number;
    categorie?: string;
    alcoholisch?: boolean;
    kleur?: string;
    afbeelding?: string;
    hotkey?: string;
}