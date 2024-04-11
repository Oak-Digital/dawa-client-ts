import { DawaAPIProvider } from './Dawa.service';
import { DawaAdresse } from './interfaces/adresse.interface';
import { DawaAdresseExtended } from './interfaces/adresseExtended.interface';

export default class DawaAdresseProvider {
    private api: DawaAPIProvider;
    private domain = 'adresser';

    constructor(api?: DawaAPIProvider) {
        this.api = api ?? new DawaAPIProvider();
    }

    async getOneByID(id: string) {
        return this.api.get<DawaAdresse>(`${this.domain}/${id}`, { params: { struktur: 'mini' } });
    }

    async search(query: string) {
        return this.api.get<DawaAdresse[]>(`${this.domain}`, { params: { struktur: 'mini', q: query } });
    }

    async getOneExtendedByID(id: string) {
        return this.api.get<DawaAdresseExtended>(`${this.domain}/${id}`, {});
    }

    async getAllAssociatedByID(id: string) {
        const address = await this.api.get<DawaAdresseExtended>(`${this.domain}/${id}`, {});
        return this.api.get<DawaAdresse[]>(`${this.domain}`, {
            params: {
                struktur: 'mini',
                esrejendomsnr: address.adgangsadresse.esrejendomsnr,
                kommunekode: address.adgangsadresse.kommune.kode,
            },
        });
    }
}
