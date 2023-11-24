export interface EntityState<T> {
    entities: T[];
    loading: boolean;
    success: boolean;
    fail: boolean;
    error: any;
}

export function createInitialState<T>(): EntityState<T> {
    return {
        entities: [],
        loading: true,
        success: false,
        fail: false,
        error: null
    };
}