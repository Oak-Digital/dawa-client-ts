import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';

export type RequestParameters = Record<string, string | number | boolean | JSON>;

const defaultConfig: RequestParameters = {
    baseURL: 'https://api.dataforsyningen.dk',
};

export class DawaAPIProvider {
    private client: AxiosInstance;

    constructor(config?: RequestParameters) {
        const axiosConfig = config ?? defaultConfig;

        this.client = axios.create({
            ...axiosConfig,
        });
    }

    async get<T>(route: string, config: AxiosRequestConfig = { params: { struktur: 'mini' } }) {
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
}
