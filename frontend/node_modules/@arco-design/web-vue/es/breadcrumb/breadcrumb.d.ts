import { PropType } from 'vue';
import { BreadcrumbRoute } from './interface';
declare const _default: import("vue").DefineComponent<{
    maxCount: {
        type: NumberConstructor;
        default: number;
    };
    routes: {
        type: PropType<BreadcrumbRoute[]>;
    };
    separator: {
        type: (StringConstructor | NumberConstructor)[];
    };
    customUrl: {
        type: PropType<(paths: string[]) => string>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    maxCount?: unknown;
    routes?: unknown;
    separator?: unknown;
    customUrl?: unknown;
} & {
    maxCount: number;
} & {
    separator?: string | number | undefined;
    routes?: BreadcrumbRoute[] | undefined;
    customUrl?: ((paths: string[]) => string) | undefined;
}>, {
    maxCount: number;
}>;
export default _default;
