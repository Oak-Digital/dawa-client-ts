import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { DawaAPIConfig } from './interfaces/dawaAPIConfig.interface';

const defaultConfig: DawaAPIConfig = {
    baseURL: 'https://api.dataforsyningen.dk',
    params: {
        struktur: 'mini',
        side: 1,
        per_side: 10,
        fuzzy: true,
    },
};

export class DawaAPIProvider {
    private client: AxiosInstance;
    private config: DawaAPIConfig;

    constructor(config?: DawaAPIConfig) {
        this.config = config ?? defaultConfig;

        this.client = axios.create({
            ...this.config,
        });
    }

    async doGetRequest<T>(route: string, config?: AxiosRequestConfig) {
        const { data } = await this.client
            .get<T>(route, config)
            .then((response) => {
                return response;
            })
            .catch((e) => {
                if (e instanceof AxiosError) {
                    if (e.response) throw new Error(`Request failed with status code ${e.response.status}`);
                    throw new Error('Request was made but no response was received');
                }

                throw e;
            });
        return data;
    }

    async get<T>(route: string) {
        return this.doGetRequest<T>(`${route}`);
    }

    async searchByParameter<T>(route: string, parameter: Record<string, string | number | boolean | JSON>) {
        return this.doGetRequest<T[]>(`${route}`, {
            params: {
                parameter,
            },
        });
    }
}
