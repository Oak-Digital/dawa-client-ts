import { describe, expect, expectTypeOf, test } from 'vitest';
import { DawaAPIProvider } from '../lib/Dawa.service';
import { DawaBBROpgang } from '../lib/interfaces/bbrOpgang.interface';
import { DawaAdresse } from '../lib/interfaces/adresse.interface';
import { DawaBBRBygning } from '../lib/interfaces/bbrBygning.interface';
import { DawaAdgangsAdresse } from '../lib/interfaces/adgangsAdresse.interface';

const api = new DawaAPIProvider();
const testAdresser = [
    'b47ff2c4-fbe7-47bf-98b4-b0b9c343a819',
    '2183dc88-dcbb-4202-a5d2-493f9d7ea4c2',
    '0a3f509d-4e82-32b8-e044-0003ba298018',
    '989af23b-d065-43cb-b26b-9e94d6ea905d',
    '0a3f50ae-7209-32b8-e044-0003ba298018',
    '7635ea6c-4912-4a2e-9304-88eb492c037f',
];

describe('adresser', () => {
    testAdresser.forEach(async (id) => {
        test('get by ID', async () => {
            const adresseData = await api.get<DawaAdresse>('adresser/' + id);
            expectTypeOf(adresseData).toEqualTypeOf<DawaAdresse>();
        });
    });

    test('get invalid ID', async () => {
        expect(async () => {
            await api.get<DawaAdresse>('adresser/' + 'invalid');
        }).rejects.toThrowError('Request failed with status code 404');
    });
});

describe('adgangsadresser', () => {
    testAdresser.forEach(async (id) => {
        test('get by ID', async () => {
            const adresseData = await api.get<DawaAdresse>('adresser/' + id);

            const adgangsAdresseData = await api.get<DawaAdgangsAdresse>(
                'adgangsadresser/' + adresseData.adgangsadresseid
            );
            expectTypeOf(adgangsAdresseData).toEqualTypeOf<DawaAdgangsAdresse>();
        });
    });

    test('get invalid ID', async () => {
        expect(async () => {
            await api.get<DawaAdgangsAdresse>('adgangsadresser/' + 'invalid');
        }).rejects.toThrowError('Request failed with status code 404');
    });
});

describe('opgange', () => {
    testAdresser.forEach(async (id) => {
        test('get by ID', async () => {
            const adresseData = await api.get<DawaAdresse>('adresser/' + id);

            const opgangsData = await api.searchByParameter<DawaBBROpgang>('bbrlight/opgange', {
                adgangsadresseid: adresseData.adgangsadresseid,
            });
            expectTypeOf(opgangsData).toEqualTypeOf<DawaBBROpgang[]>();
        });
    });

    test('get invalid ID', async () => {
        expect(async () => {
            await api.get<DawaBBROpgang>('bbrlight/opgange/' + 'invalid');
        }).rejects.toThrowError('Request failed with status code 404');
    });
});

describe('bygninger', () => {
    testAdresser.forEach(async (id) => {
        const adresseData = await api.get<DawaAdresse>('adresser/' + id);
        const opgangsData = await api.searchByParameter<DawaBBROpgang>('bbrlight/opgange', {
            adgangsadresseid: adresseData.adgangsadresseid,
        });

        opgangsData.forEach((opgang) => {
            test('get by ID', async () => {
                const bygningsData = await api.get<DawaBBRBygning>('bbrlight/bygninger/' + opgang.Bygning_id);
                expectTypeOf(bygningsData).toEqualTypeOf<DawaBBRBygning>();
            });
        });
    });

    test('get invalid ID', async () => {
        expect(async () => {
            await api.get<DawaBBRBygning>('bbrlight/bygninger/' + 'invalid');
        }).rejects.toThrowError('Request failed with status code 404');
    });
});
