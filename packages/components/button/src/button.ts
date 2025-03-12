export type SizeType = "large" | "default" | "small" | "";

export const buttonTypes = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  "",
] as const;

export interface ButtonProps {
  size: SizeType;
  tag: string;
  disabled: boolean;
  type: string;
  plain: boolean;
  round: boolean;
  circle: boolean;
  loading: boolean;
}

export const buttonEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
};
