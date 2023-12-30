import { RowDataPacket } from "mysql2"

export default interface BeursSettings extends RowDataPacket {
    id: number;
    beurs_refresh_timer: number;
    prijs_interval: number;
    beurs_crash_timed: boolean;
    beurs_crash_timer: number;
    beurs_crash_probability: number;
}