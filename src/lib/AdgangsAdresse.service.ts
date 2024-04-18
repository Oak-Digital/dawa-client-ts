import { DawaAPIProvider } from './Dawa.service';
import { DawaAdgangsAdresse } from './interfaces/adgangsAdresse.interface';
import { DawaAdgangsAdresseExtended } from './interfaces/adgangsAdresseExtended.interface';

export default class DawaAdgangsAdresseProvider {
    private api: DawaAPIProvider;
    private domain = 'adgangsadresser';

    constructor(api?: DawaAPIProvider) {
        this.api = api ?? new DawaAPIProvider();
    }

    async getOneByID(id: string) {
        return this.api.get<DawaAdgangsAdresse>(`${this.domain}/${id}`, { params: { struktur: 'mini' } });
    }

    async getOneByIDExtended(id: string) {
        return this.api.get<DawaAdgangsAdresseExtended>(`${this.domain}/${id}`, {});
    }

    async search(query: string) {
        return this.api.get<DawaAdgangsAdresse[]>(`${this.domain}`, { params: { q: query, struktur: 'mini' } });
    }
}
