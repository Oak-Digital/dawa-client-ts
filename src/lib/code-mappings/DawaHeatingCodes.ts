import { CodeMap } from './code-map.interface';

export const DawaHeatingCodes: CodeMap = {
    data: {
        1: 'Fjernvarme/blokvarme (radiatorsystemer el. varmluftanlæg)',
        2: 'Centralvarme fra eget anlæg, et-kammer fyr',
        3: 'Ovne (kakkelovne, kamin, brændeovne o.l.)',
        5: 'Varmepumpe',
        6: 'Centralvarme med to fyringsenheder (fast og olie eller gas)',
        7: 'Elovne, elpaneler',
        8: 'Gasradiator',
        9: 'Ingen varmeinstallation',
        99: 'Blandet',
    },
    get: (code: number) => {
        return DawaHeatingCodes.data[code];
    },
};
