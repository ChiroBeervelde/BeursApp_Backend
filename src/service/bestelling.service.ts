import bestellingRepositorie from '../repositories/bestelling.repositorie';
import Bestelling from '../models/bestelling.model';
import BestellingItems from '../models/bestellingItems.model';


class BestellingService {
    
    async findAllBestellingen() : Promise<any> {
        console.log('findAllBestellingen');
        const bestellingen =  await bestellingRepositorie.retreiveAllBestelligItems();
        return bestellingen;
    }

    async createBestelling(bestelling : Bestelling) : Promise<number> {
        const bestellingId = await bestellingRepositorie.createBestelling(bestelling);

        for (const item of bestelling.bestellingItems) {
            const bestellingitem: BestellingItems = {
                drankId: item.id,
                bestellingId: bestellingId,
                aantal: item.aantal,
                prijsPerArtikel: item.prijsPerArtikel,
            } as BestellingItems;
            await bestellingRepositorie.createBestellingItem(bestellingitem);
        }

        return bestellingId;
    }
}

export default new BestellingService();