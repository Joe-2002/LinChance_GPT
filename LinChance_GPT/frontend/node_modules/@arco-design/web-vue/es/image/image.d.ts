import { PropType, StyleValue, CSSProperties } from 'vue';
import type { ImagePreviewProps } from './interface';
declare const _default: import("vue").DefineComponent<{
    renderToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    src: {
        type: StringConstructor;
    };
    width: {
        type: PropType<string | number>;
    };
    height: {
        type: PropType<string | number>;
    };
    title: {
        type: StringConstructor;
    };
    description: {
        type: StringConstructor;
    };
    fit: {
        type: PropType<"none" | "contain" | "cover" | "fill" | "scale-down">;
    };
    alt: {
        type: StringConstructor;
    };
    hideFooter: {
        type: PropType<boolean | "never">;
        default: boolean;
    };
    footerPosition: {
        type: PropType<"outer" | "inner">;
        default: string;
    };
    showLoader: {
        type: BooleanConstructor;
        default: boolean;
    };
    preview: {
        type: BooleanConstructor;
        default: boolean;
    };
    previewVisible: {
        type: BooleanConstructor;
        default: undefined;
    };
    defaultPreviewVisible: {
        type: BooleanConstructor;
        default: boolean;
    };
    previewProps: {
        type: PropType<ImagePreviewProps>;
    };
    footerClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
    };
}, {
    t: (key: string, ...args: any[]) => string;
    refImg: import("vue").Ref<any>;
    prefixCls: string;
    wrapperClassNames: import("vue").ComputedRef<unknown[]>;
    wrapperStyles: import("vue").ComputedRef<StyleValue[]>;
    showFooter: import("vue").ComputedRef<boolean>;
    imgProps: import("vue").ComputedRef<Omit<{
        [x: string]: unknown;
    }, "style" | "class">>;
    imgStyle: import("vue").ComputedRef<{
        width: string | undefined;
        height: string | undefined;
    }>;
    isLoaded: import("vue").ComputedRef<boolean>;
    isError: import("vue").ComputedRef<boolean>;
    isLoading: import("vue").ComputedRef<boolean>;
    mergedPreviewVisible: import("vue").ComputedRef<boolean>;
    mergePreview: import("vue").ComputedRef<boolean>;
    onImgLoaded: () => void;
    onImgLoadError: () => void;
    onImgClick: () => void;
    onPreviewClose: () => void;
    fitStyle: import("vue").ComputedRef<CSSProperties>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("preview-visible-change" | "update:previewVisible")[], "preview-visible-change" | "update:previewVisible", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    renderToBody?: unknown;
    src?: unknown;
    width?: unknown;
    height?: unknown;
    title?: unknown;
    description?: unknown;
    fit?: unknown;
    alt?: unknown;
    hideFooter?: unknown;
    footerPosition?: unknown;
    showLoader?: unknown;
    preview?: unknown;
    previewVisible?: unknown;
    defaultPreviewVisible?: unknown;
    previewProps?: unknown;
    footerClass?: unknown;
} & {
    renderToBody: boolean;
    preview: boolean;
    hideFooter: boolean | "never";
    footerPosition: "outer" | "inner";
    showLoader: boolean;
    defaultPreviewVisible: boolean;
} & {
    title?: string | undefined;
    height?: string | number | undefined;
    width?: string | number | undefined;
    description?: string | undefined;
    src?: string | undefined;
    fit?: "none" | "contain" | "cover" | "fill" | "scale-down" | undefined;
    alt?: string | undefined;
    previewVisible?: boolean | undefined;
    previewProps?: ImagePreviewProps | undefined;
    footerClass?: string | unknown[] | Record<string, any> | undefined;
}> & {
    "onPreview-visible-change"?: ((...args: any[]) => any) | undefined;
    "onUpdate:previewVisible"?: ((...args: any[]) => any) | undefined;
}, {
    renderToBody: boolean;
    preview: boolean;
    hideFooter: boolean | "never";
    footerPosition: "outer" | "inner";
    showLoader: boolean;
    previewVisible: boolean;
    defaultPreviewVisible: boolean;
}>;
export default _default;
