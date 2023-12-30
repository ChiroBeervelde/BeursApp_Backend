import connection from "../db";

import BeursSettings from "../models/beursSettings.model";

interface IBeursSettingsRepository {
    retrieveSettings(): Promise<BeursSettings>;
}

class BeursSettingsRepository implements IBeursSettingsRepository {
        retrieveSettings(): Promise<BeursSettings> {
                let query: string = "SELECT * FROM beursapp_settings";
        
                return new Promise((resolve, reject) => {
                    connection.query<BeursSettings[]>(query, (err, res) => {
                        if (err) reject(err);
                        else resolve(res[0]);
                    });
                });
            }
}

export default new BeursSettingsRepository();