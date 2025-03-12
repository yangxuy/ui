import { VNode } from "vue";

export interface NotificationProps {
  offset?: number;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  title?: string;
  type?: "success" | "warning" | "info" | "error" | "primary" | "";
  duration?: number;
  message?: string | VNode | Function;
  unmount?: () => void;
}

export const notifyTypes = [
  "success",
  "info",
  "warning",
  "error",
  "primary",
] as const;

export type notifyType = (typeof notifyTypes)[number];

export interface NotifyHandler {
  close: () => void;
}

export type NotifyFn = {
  (options?: NotificationProps): NotifyHandler;
  closeAll(type?: notifyType): void;
};

export type NotifyTypedFn = (options?: NotificationProps) => NotifyHandler;

export interface Notify extends NotifyFn {
  success: NotifyTypedFn;
  warning: NotifyTypedFn;
  info: NotifyTypedFn;
  error: NotifyTypedFn;
}
