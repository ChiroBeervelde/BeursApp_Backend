import BeursSettings from "../models/beursSettings.model";
import beursSettignsRepositorie from "../repositories/beursSettings.repositorie";
import bestellingRepositorie from "../repositories/bestelling.repositorie";
import drankenRepositorie from "../repositories/dranken.repositorie";
import Drank from "../models/drank.model";
import LastBestellingItems from "../models/bestellingItems.model";
import { log } from "console";

class BeursService {
    private refreshIntervalId: string | number | NodeJS.Timeout | undefined;
    private beursCrashIntervalId: string | number | NodeJS.Timeout | undefined;
    private beursSettings: BeursSettings | undefined;
    private beursCrash: boolean = false;

    async start_beurs() {
        console.log('Beurs Started');
        this.beursSettings = await beursSettignsRepositorie.retrieveSettings();
        this.refreshIntervalId = setInterval(() => this.simuleer(), this.beursSettings.beurs_refresh_timer);
        if (this.beursSettings.beurs_crash_timed) {
            this.beursCrashIntervalId = setInterval(() => this.toggle_beurscrash(), this.beursSettings.beurs_crash_timer);
        }
    }

    async stop_beurs() {
        console.log('Beurs Stopped');
        clearInterval(this.refreshIntervalId);
        if (this.beursSettings!.beurs_crash_timed) {
            clearInterval(this.beursCrashIntervalId);
        }
    }

    async simuleer() {
        console.log('Beurs Simulated');
        const lastBestellingItems = await bestellingRepositorie.retrieveLastBestellingItems();
        const dranken = await drankenRepositorie.retrieveAll();
        const totaalAantalBesteld = lastBestellingItems.reduce((acc, item) => acc + item.aantal, 0);
        const beursSettings = await beursSettignsRepositorie.retrieveSettings();

        if (!beursSettings!.beurs_crash_timed && Math.random() < beursSettings!.beurs_crash_probability/100) {
            this.toggle_beurscrash();
        }
        await this.simuleer_beurs(dranken, lastBestellingItems, totaalAantalBesteld);     
    }

    async simuleer_beurs(dranken: Drank[], lastBestellingItems: LastBestellingItems[], totaalAantalBesteld: number) : Promise<void> {

        dranken.forEach(async (drank) => {
            const bestellingItemsOfDrank = lastBestellingItems.filter(item => item.drankId === drank.id);
            const aantalBesteld = bestellingItemsOfDrank.reduce((acc, item) => acc + item.aantal, 0);    

            const nieuwePrijs = this.calculateNewPrice(drank, aantalBesteld, totaalAantalBesteld);

            await drankenRepositorie.updatePrijs(drank.id, drank.huidigePrijs, nieuwePrijs);
        });

        if (this.beursCrash) {
            this.beursCrash = false;
        }
    }

    toggle_beurscrash() {
        this.beursCrash = !this.beursCrash;
    }

    calculateNewPrice(drank: Drank, aantalBesteld: number, totaalAantalBesteld: number) {
        let nieuwePrijs;
        if (this.beursCrash) {
            nieuwePrijs = drank.huidigePrijs - (5 * this.beursSettings!.prijs_interval);
        } else {
            const bestelverhouding = aantalBesteld / totaalAantalBesteld;
            console.log(drank.naam)
            console.log( bestelverhouding)

            switch (true) {
                case bestelverhouding == 0:
                    nieuwePrijs = drank.huidigePrijs - (3 * this.beursSettings!.prijs_interval);
                    break;
                case bestelverhouding < 0.05:
                    nieuwePrijs = drank.huidigePrijs - (2 * this.beursSettings!.prijs_interval);
                    break;
                case bestelverhouding < 0.1:
                    nieuwePrijs = drank.huidigePrijs + this.beursSettings!.prijs_interval;
                    break;
                case bestelverhouding < 0.2:
                    nieuwePrijs = drank.huidigePrijs + (2 * this.beursSettings!.prijs_interval);
                    break;
                case bestelverhouding < 0.3:
                    nieuwePrijs = drank.huidigePrijs + (3 * this.beursSettings!.prijs_interval);
                    break;
                case bestelverhouding < 0.4:
                    nieuwePrijs = drank.huidigePrijs + (4 * this.beursSettings!.prijs_interval);
                    break;
                case bestelverhouding < 5:
                    nieuwePrijs = drank.huidigePrijs + (5 * this.beursSettings!.prijs_interval);
                    break;
                default:
                    nieuwePrijs = drank.huidigePrijs - this.beursSettings!.prijs_interval;
                    break;
            }
        }
        if (nieuwePrijs > drank.maxPrijs) {
            nieuwePrijs = drank.maxPrijs;
        }
        if (nieuwePrijs < drank.minPrijs) {
            nieuwePrijs = drank.minPrijs;
        }
            console.log( drank.huidigePrijs)
            console.log( nieuwePrijs)

        return nieuwePrijs;
    }
}

export default new BeursService();