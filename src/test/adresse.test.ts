import { expect, expectTypeOf, test } from 'vitest';
import { DawaAPIProvider } from '../lib/Dawa.service';
import { DawaAdresse } from '../lib/interfaces/adresse.interface';

const api = new DawaAPIProvider();
const adresseId = '7635ea6c-4912-4a2e-9304-88eb492c037f';

test('get by ID', async () => {
    const adresseData = await api.get<DawaAdresse>('adresser', adresseId);

    expectTypeOf(adresseData).toEqualTypeOf<DawaAdresse>();
    expect(adresseData.id).toBe(adresseId);
});

test('get invalid ID', async () => {
    expect(async () => {
        await api.get<DawaAdresse>('adresser', 'invalid');
    }).rejects.toThrowError('Request failed with status code 404');
});
