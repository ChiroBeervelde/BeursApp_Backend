import { OkPacket } from "mysql2";
import connection from "../db";

import Drank from "../models/drank.model";

interface IDrankRepository {
  retrieveAll(): Promise<Drank[]>;
  updatePrijs(id: number, huidigePrijs: number, nieuwePrijs: number): Promise<number>;
}

class DrankRepository implements IDrankRepository {

    retrieveAll(): Promise<Drank[]> {
        let query: string = "SELECT * FROM dranken";
    
        return new Promise((resolve, reject) => {
          connection.query<Drank[]>(query, (err, res) => {
            if (err) reject(err);
            else resolve(res);
          });
        });
      }

    updatePrijs(id: number, huidigePrijs: number, nieuwePrijs: number): Promise<number> {
      let query: string = "UPDATE dranken SET huidigePrijs = ?, vorigePrijs = ? WHERE id = ?";

      return new Promise((resolve, reject) => {
        connection.query<OkPacket>(
          query,
          [nieuwePrijs, huidigePrijs, id],
          (err, res) => {
            if (err) reject(err);
            else resolve(res.affectedRows);
          }
        );
      });    }
}

export default new DrankRepository();