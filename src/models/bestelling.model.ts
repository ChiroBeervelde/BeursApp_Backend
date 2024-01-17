import { RowDataPacket } from "mysql2";
import BestellingItems from "./bestellingItems.model";

export default interface Bestelling extends RowDataPacket {
    bestelDatum: Date;
    bestellingItems: BestellingItems[];
}