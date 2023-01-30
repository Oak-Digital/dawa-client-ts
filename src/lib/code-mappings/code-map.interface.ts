export interface CodeMap {
    data: Record<number, string>;
    get: (code: number) => string;
}
