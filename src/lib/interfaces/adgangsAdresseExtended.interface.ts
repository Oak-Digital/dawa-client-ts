export interface DawaAdgangsAdresseExtended {
    href: string;
    id: string;
    adressebetegnelse: string;
    kvh: string;
    status: number;
    darstatus: number;
    vejstykke: {
        href: string;
        navn: string;
        adresseringsnavn: string;
        kode: string;
    };
    husnr: string;
    navngivenvej: {
        href: string;
        id: string;
    };
    supplerendebynavn: null | string;
    supplerendebynavn2: null | string;
    postnummer: {
        href: string;
        nr: string;
        navn: string;
    };
    stormodtagerpostnummer: null | string;
    kommune: {
        href: string;
        kode: string;
        navn: string;
    };
    ejerlav: {
        kode: number;
        navn: string;
    };
    esrejendomsnr: string;
    matrikelnr: string;
    historik: {
        oprettet: string;
        ændret: string;
        ikrafttrædelse: string;
        nedlagt: null | string;
    };
    adgangspunkt: {
        id: string;
        koordinater: [number, number];
        højde: number;
        nøjagtighed: string;
        kilde: number;
        tekniskstandard: string;
        tekstretning: number;
        ændret: string;
    };
    vejpunkt: {
        id: string;
        kilde: string;
        nøjagtighed: string;
        tekniskstandard: string;
        koordinater: [number, number];
        ændret: string;
    };
    DDKN: {
        m100: string;
        km1: string;
        km10: string;
    };
    sogn: {
        href: string;
        kode: string;
        navn: string;
    };
    region: {
        href: string;
        kode: string;
        navn: string;
    };
    landsdel: {
        href: string;
        nuts3: string;
        navn: string;
    };
    retskreds: {
        href: string;
        kode: string;
        navn: string;
    };
    politikreds: {
        href: string;
        kode: string;
        navn: string;
    };
    opstillingskreds: {
        href: string;
        kode: string;
        navn: string;
    };
    afstemningsområde: {
        href: string;
        kode: string;
        navn: string;
    };
}
