import { DawaAdgangsAdresse } from './adgangsAdresse.interface';
import { DawaAdresse } from './adresse.interface';
import { DawaBBRBygning } from './bbrBygning.interface';
import { DawaBBREnhed } from './bbrEnhed.interface';

export interface DawaDataCollection {
    adresse: DawaAdresse;
    adgangsAdresse: DawaAdgangsAdresse;
    bygninger: DawaBBRBygning[];
    enheder: DawaBBREnhed[];
}
