import { InjectionKey, ToRefs, Ref } from "vue";

export interface OptionProps {
  label?: string;
  value?: any;
  disabled?: boolean;
}

export interface SelectProps {
  disabled?: boolean;
  clearable?: boolean;
  filterable?: boolean;
  multiple?: boolean;
  placeholder?: string;
}

export interface SelectContext {
  handleOptionSelect: Function;
  addOption: (option: OptionProps) => void;
  delOption: (option: OptionProps) => void;
}

export const selectContextKey: InjectionKey<
  SelectContext & ToRefs<SelectProps> & { model: Ref<any> }
> = Symbol("ss-select");
