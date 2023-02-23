import { DawaAdgangsAdresseExtended } from './adgangsAdresseExtended.interface';

export interface DawaAdresseExtended {
    id: string;
    kvhx: string;
    status: number;
    darstatus: number;
    href: string;
    historik: {
        oprettet: string;
        ændret: string;
        ikrafttrædelse: string;
        nedlagt: string | null;
    };
    etage: string;
    dør: string;
    adressebetegnelse: string;
    adgangsadresse: DawaAdgangsAdresseExtended;
}
