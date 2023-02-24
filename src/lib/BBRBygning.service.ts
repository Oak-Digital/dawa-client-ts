import { DawaAdresseProvider, DawaBBRBygning } from '../main';
import { DawaAPIProvider, RequestParameters } from './Dawa.service';

export default class DawaBBRBygningProvider {
    private api: DawaAPIProvider;
    private domain = 'bbrlight/bygninger';

    constructor(api?: DawaAPIProvider) {
        this.api = api ?? new DawaAPIProvider();
    }

    async getOneByID(id: string) {
        return this.api.get<DawaBBRBygning>(`${this.domain}/${id}`, { params: { struktur: 'mini' } });
    }

    async search(query: RequestParameters) {
        return this.api.get<DawaBBRBygning[]>(`${this.domain}`, { params: { struktur: 'mini', ...query } });
    }

    async getAssociatedByAddressID(id: string) {
        const adresseProvider = new DawaAdresseProvider();
        const address = await adresseProvider.getOneExtendedByID(id);

        return this.api.get<DawaBBRBygning[]>(`${this.domain}`, {
            params: {
                struktur: 'mini',
                esrejendomsnr: address.adgangsadresse.esrejendomsnr,
                kommunekode: address.adgangsadresse.kommune.kode,
            },
        });
    }
}
