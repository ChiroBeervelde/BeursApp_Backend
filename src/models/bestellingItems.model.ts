import { RowDataPacket } from "mysql2"

export default interface BestellingItems extends RowDataPacket {
    bestellingId: number;
    drankId: number;
    aantal: number;
    prijsPerArtikel: number;
}