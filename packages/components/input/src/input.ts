export interface InputProps {
  placeholder?: string;
  type?: string;
  clearable?: boolean;
  disabled?: boolean;
  autocomplete?: boolean;
  max?: number;
  min?: number;
  formatter?: Function;
  parser?: Function;
  showPassword?: boolean;
}
