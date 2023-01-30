export interface DawaAdgangsAdresse {
    id: string;
    status: number;
    darstatus: number;
    vejkode: string;
    vejnavn: string;
    adresseringsvejnavn: string;
    husnr: string;
    supplerendebynavn: string | null;
    postnr: string;
    postnrnavn: string;
    stormodtagerpostnr: string | null;
    stormodtagerpostnrnavn: string | null;
    kommunekode: string;
    x: number;
    y: number;
    href: string;
    betegnelse: string;
}
