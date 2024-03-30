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
            console.log('item:', item);
            const bestellingitem: BestellingItems = {
                drankId: item.id,
                bestellingId: bestellingId,
                aantal: item.aantal,
                prijsPerArtikel: item.prijsPerArtikel,
            } as BestellingItems;
            console.log('bestellingitem:', bestellingitem)
            await bestellingRepositorie.createBestellingItem(bestellingitem);
        }

        return bestellingId;
    }

    async createBestellingItem(body: any) : Promise<number> {
        // console.log('createBestellingItem');
        // // const bestellingId = await this.createBestelling();
        // const bestellingitem: BestellingItems = {
        //     drankId: body.drankId,
        //     bestellingId: bestellingId,
        //     aantal: body.aantal,
        //     prijsPerArtikel: body.prijsPerArtikel,
        // } as BestellingItems;

        // const bestellingItemId = await bestellingRepositorie.createBestellingItem(bestellingitem);

        // return bestellingItemId;
        return 0;
    }
}

export default new BestellingService();