import { RowDataPacket } from "mysql2"

export default interface BestellingItems extends RowDataPacket {
    drankId: number;
    bestellingId: number;
    aantal: number;
    prijsPerArtikel: number;
}