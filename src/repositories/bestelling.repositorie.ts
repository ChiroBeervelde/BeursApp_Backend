import connection from "../db";

import LastBestellingItems from "../models/bestellingItems.model";

interface IBestellingRepository {
    retrieveLastBestellingItems(): Promise<LastBestellingItems[]>;
}

class BestellingRepository implements IBestellingRepository {
        retrieveLastBestellingItems(): Promise<LastBestellingItems[]> {
                let query: string = "SELECT bi.drankId, bi.aantal, bi.prijsPerArtikel FROM bestelling_items bi JOIN bestellingen b ON bi.bestellingid = b.id WHERE b.bestelDatum >= NOW() - INTERVAL 2 MINUTE";
        
                return new Promise((resolve, reject) => {
                    connection.query<LastBestellingItems[]>(query, (err, res) => {
                        if (err) reject(err);
                        else resolve(res);
                    });
                });
            }
}

export default new BestellingRepository();