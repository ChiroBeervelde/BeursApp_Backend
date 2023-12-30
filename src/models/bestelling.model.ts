import { RowDataPacket } from "mysql2";

export default interface BestellingItems extends RowDataPacket {
    bestelDatum: Date;
}