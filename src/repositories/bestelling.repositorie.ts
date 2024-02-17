import connection from "../db";

import BestellingItems from "../models/bestellingItems.model";
import Bestelling from "../models/bestelling.model";
import { OkPacket } from "mysql2";

interface IBestellingRepository {
    retreiveAllBestellingen(): Promise<Bestelling[]>;
    retreiveAllBestelligItems(): Promise<BestellingItems[]>;
    retrieveLastBestellingItems(): Promise<BestellingItems[]>;
    createBestelling(bestelling: Bestelling): Promise<number>;
    createBestellingItem(bestellingItem: BestellingItems): Promise<number>;
}

class BestellingRepository implements IBestellingRepository {
        retreiveAllBestellingen(): Promise<Bestelling[]> {
            throw new Error("Method not implemented.");
        }

        retreiveAllBestelligItems(): Promise<BestellingItems[]> {
            throw new Error("Method not implemented.");
        }

        retrieveLastBestellingItems(): Promise<BestellingItems[]> {
                let query: string = "SELECT bi.drankId, bi.aantal, bi.prijsPerArtikel FROM bestelling_items bi JOIN bestellingen b ON bi.bestellingid = b.id WHERE b.bestelDatum >= NOW() - INTERVAL 2 MINUTE";

                return new Promise((resolve, reject) => {
                    connection.query<BestellingItems[]>(query, (err, res) => {
                        if (err) reject(err);
                        else resolve(res);
                    });
                });
            }

        createBestelling(bestelling: Bestelling): Promise<number> {
            let query: string = "INSERT INTO bestellingen (bestelDatum) VALUES (?)";
            let bestelDatum = new Date(bestelling.bestelDatum);

            bestelDatum = new Date();
            
            console.log(bestelDatum);

            return new Promise((resolve, reject) => {
                connection.query(query, [bestelDatum], (err, res: OkPacket) => {
                    if (err) reject(err);
                    else resolve(res.insertId);
                });
            });
        }

        createBestellingItem(bestellingItem: BestellingItems): Promise<number> {
             let query: string = "INSERT INTO bestelling_items (drankId, bestellingId, aantal, prijsPerArtikel) VALUES (?, ?, ?, ?)";

            return new Promise((resolve, reject) => {
                connection.query(query, [bestellingItem.drankId, bestellingItem.bestellingId, bestellingItem.aantal, bestellingItem.prijsPerArtikel], (err, res: OkPacket) => {
                    if (err) reject(err);
                    else resolve(res.insertId);
                });
            });
        }
        
}

export default new BestellingRepository();