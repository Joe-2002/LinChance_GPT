export declare const usePureProp: <T extends Record<string, unknown>, K extends keyof T>(props: T, name: K) => import("vue").Ref<import("vue").UnwrapRef<T[K]>>;
