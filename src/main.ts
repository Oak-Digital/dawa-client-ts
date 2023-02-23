import { DawaAPIProvider } from './lib/Dawa.service';
import type { DawaAdresse } from './lib/interfaces/adresse.interface';
import type { DawaAdgangsAdresse } from './lib/interfaces/adgangsAdresse.interface';
import type { DawaBBRBygning } from './lib/interfaces/bbrBygning.interface';
import type { DawaBBREnhed } from './lib/interfaces/bbrEnhed.interface';
import type { DawaBBROpgang } from './lib/interfaces/bbrOpgang.interface';
import type { DawaDataCollection } from './lib/interfaces/dawaDataCollection.interface';
import { DawaHeatingCodes } from './lib/code-mappings/DawaHeatingCodes';
import { DawaHeatingMaterial } from './lib/code-mappings/DawaHeatingMaterial';
import type { DawaKommune } from './lib/interfaces/kommune.interface';
import DawaAdresseProvider from './lib/Adresse.service';
import DawaAdgangsAdresseProvider from './lib/AdgangsAdresse.service';
import DawaBBRBygningProvider from './lib/BBRBygning.service';

export {
    DawaAPIProvider,
    DawaAdresseProvider,
    DawaAdgangsAdresseProvider,
    DawaBBRBygningProvider,
    DawaAdresse,
    DawaAdgangsAdresse,
    DawaBBRBygning,
    DawaBBREnhed,
    DawaBBROpgang,
    DawaDataCollection,
    DawaKommune,
    DawaHeatingCodes,
    DawaHeatingMaterial,
};
