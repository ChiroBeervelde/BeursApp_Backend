import { OkPacket } from "mysql2";
import connection from "../db";

import Drank from "../models/drank.model";

interface IDrankRepository {
  retrieveAll(): Promise<Drank[]>;
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
}

export default new DrankRepository();