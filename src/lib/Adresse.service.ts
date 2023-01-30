import { DawaAPIProvider } from './Dawa.service';
import { DawaAdresse } from './interfaces/adresse.interface';

export default class DawaAdresseProvider {
    private api: DawaAPIProvider;
    private domain = 'adresser';

    constructor(api?: DawaAPIProvider) {
        this.api = api ?? new DawaAPIProvider();
    }

    async getOneByID(id: string) {
        return this.api.get<DawaAdresse>(`${this.domain}/${id}`);
    }

    async search(query: string) {
        return this.api.searchByParameter<DawaAdresse[]>(`${this.domain}`, { query: query });
    }
}
