import { CodeMap } from './code-map.interface';

export const DawaHeatingMaterial: CodeMap = {
    data: {
        0: 'N/A',
        1: 'Elektricitet',
        2: 'Gasværksgas',
        3: 'Flydende brændsel (olie, petroleum, flaskegas)',
        4: 'Fast brændsel (kul, koks, brænde mm.)',
        6: 'Halm',
        7: 'Naturgas',
        9: 'Andet',
    },
    get: (code: number) => {
        return DawaHeatingMaterial.data[code];
    },
};
