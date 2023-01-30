export interface DawaAPIConfig {
    baseURL: string;
    params: {
        struktur: string;
        side: number;
        per_side: number;
        fuzzy: boolean;
    };
}
