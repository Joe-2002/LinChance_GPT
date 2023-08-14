import { Ref } from 'vue';
import { EmitFn } from '../_utils/types';
import { FormItemEventHandler } from '../form/interface';
export declare const useInput: ({ defaultValue, modelValue, emit, eventName, updateEventName, eventHandlers, }: {
    defaultValue?: Ref<string> | undefined;
    modelValue?: Ref<string> | undefined;
    emit: EmitFn<any>;
    eventName?: string | undefined;
    updateEventName?: string | undefined;
    eventHandlers?: Ref<FormItemEventHandler> | undefined;
}) => {
    inputRef: Ref<HTMLInputElement | undefined>;
    _value: Ref<string>;
    _focused: Ref<boolean>;
    isComposition: Ref<boolean>;
    compositionValue: Ref<string>;
    computedValue: import("vue").ComputedRef<string>;
    handleInput: (ev: Event) => void;
    handleComposition: (ev: CompositionEvent) => void;
    handleFocus: (ev: FocusEvent) => void;
    handleBlur: (ev: FocusEvent) => void;
    handleKeyDown: (ev: KeyboardEvent) => void;
    handleMousedown: (ev: MouseEvent) => void;
};
