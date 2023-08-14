import { PropType, VNodeTypes } from 'vue';
export declare type RenderFunc = (props: Record<string, unknown>) => VNodeTypes;
declare const _default: import("vue").DefineComponent<{
    renderFunc: {
        type: PropType<RenderFunc>;
        required: true;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    renderFunc?: unknown;
} & {
    renderFunc: RenderFunc;
} & {}>, {}>;
export default _default;
