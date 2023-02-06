import { DawaAPIProvider } from './lib/Dawa.service';
import type { DawaAdresse } from './lib/interfaces/adresse.interface';
import type { DawaAdgangsAdresse } from './lib/interfaces/adgangsAdresse.interface';
import type { DawaBBRBygning } from './lib/interfaces/bbrBygning.interface';
import type { DawaBBREnhed } from './lib/interfaces/bbrEnhed.interface';
import type { DawaBBROpgang } from './lib/interfaces/bbrOpgang.interface';
import type { DawaDataCollection } from './lib/interfaces/dawaDataCollection.interface';
import { DawaHeatingCodes } from './lib/code-mappings/DawaHeatingCodes';
import { DawaHeatingMaterial } from './lib/code-mappings/DawaHeatingMaterial';
import type { DawaAPIConfig } from './lib/interfaces/dawaAPIConfig.interface';
import type { DawaKommune } from './lib/interfaces/kommune.interface';
// import type { CodeMap } from './lib/codeMappings/code-map.interface';

export {
    DawaAPIProvider,
    DawaAPIConfig,
    DawaAdresse,
    DawaAdgangsAdresse,
    DawaBBRBygning,
    DawaBBREnhed,
    DawaBBROpgang,
    DawaDataCollection,
    DawaKommune,
    // CodeMap,
    DawaHeatingCodes,
    DawaHeatingMaterial,
};
