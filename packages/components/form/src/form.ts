import { RuleItem, ValidateError, ValidateFieldsError } from "async-validator";
import { computed, inject, InjectionKey, ref, ToRef, ToRefs } from "vue";

export const componentSizes = ["", "default", "small", "large"] as const;

export type ComponentSize = (typeof componentSizes)[number];

export interface FormProp {
  model?: any;
  inline?: boolean;
  labelPosition?: string;
  labelWidth?: number | string;
  disabled?: boolean;
  size?: ComponentSize;
  scrollToError?: boolean;
}

export interface FormItemProp {
  prop?: string;
  required?: boolean;
  rules?: Arrayable<FormItemRule>;
  error?: string;
  size?: ComponentSize;
  label?: string;
  labelPosition?: string;
}

export type FormValidateCallback = (
  isValid: boolean,
  invalidFields?: ValidateFieldsError
) => Promise<void> | void;

export const formItemValidateStates = [
  "",
  "error",
  "validating",
  "success",
] as const;

export type FormItemValidateState = (typeof formItemValidateStates)[number];

export interface FormValidateFailure {
  errors: ValidateError[] | null;
  fields: ValidateFieldsError;
}

export interface FormItemRule extends RuleItem {
  trigger?: string | Array<string>;
}

export type Nullable<T> = T | null;

export type Arrayable<T> = T[];

export type Awaitable<T> = Promise<T> | T;

export type FormContext = ToRefs<FormProp> &
  ReturnType<typeof useFormLabelWidth> & {
    getField: (prop: string) => FormItemContext | undefined;
    addField: (field: FormItemContext) => void;
    removeField: (field: FormItemContext) => void;
    resetFields: (props?: Arrayable<FormItemProp>) => void;
    clearValidate: (props?: Arrayable<FormItemProp>) => void;
    validateField: (
      props?: Arrayable<FormItemProp>,
      callback?: FormValidateCallback
    ) => any;
  };

export const formContextKey: InjectionKey<FormContext> =
  Symbol("formContextKey");

export type FormItemContext = ToRefs<FormItemProp> & {
  $el: ToRef<HTMLDivElement>;
  validateState: FormItemValidateState;
  isGroup: boolean;
  hasLabel: boolean;
  fieldValue: any;
  validate: (trigger?: string, callback?: FormValidateCallback) => any;
  resetField(prop?: FormItemProp): void;
  clearValidate(): void;
};

export const formItemContextKey: InjectionKey<FormItemContext> =
  Symbol("formItemContextKey");

export function useFormLabelWidth() {
  const potentialLabelWidthArr = ref<number[]>([]);

  function getLabelWidthIndex(width: number) {
    const index = potentialLabelWidthArr.value.indexOf(width);

    return index;
  }

  return {
    autoLabelWidth: computed(() => {
      if (!potentialLabelWidthArr.value.length) return "0";
      const max = Math.max(...potentialLabelWidthArr.value);
      return max ? `${max}px` : "";
    }),

    registerLabelWidth(val: number, oldVal: number) {
      if (val && oldVal) {
        const index = getLabelWidthIndex(oldVal);
        potentialLabelWidthArr.value.splice(index, 1, val);
      } else if (val) {
        potentialLabelWidthArr.value.push(val);
      }
    },

    deregisterLabelWidth(val: number) {
      const index = getLabelWidthIndex(val);
      if (index > -1) {
        potentialLabelWidthArr.value.splice(index, 1);
      }
    },
  };
}

export const useFormDisabled = () => {
  const form = inject(formContextKey, undefined);
  return computed(() => form?.disabled);
};
