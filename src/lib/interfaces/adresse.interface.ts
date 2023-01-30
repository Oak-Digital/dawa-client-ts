export interface DawaAdresse {
    id: string;
    status: number;
    darstatus: number;
    vejkode: string;
    vejnavn: string;
    adresseringsvejnavn: string;
    husnr: string;
    etage: string;
    dør: string | null;
    supplerendebynavn: string | null;
    postnr: string;
    postnrnavn: string;
    stormodtagerpostnr: string | null;
    stormodtagerpostnrnavn: string | null;
    kommunekode: string;
    adgangsadresseid: string;
    x: number;
    y: number;
    href: string;
    betegnelse: string;
}
