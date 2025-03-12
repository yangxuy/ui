import { VNode } from "vue";

export const messageTypes = [
  "success",
  "info",
  "warning",
  "error",
  "primary",
] as const;

export interface MessageProps {
  message: string | VNode | Function;
  duration?: number;
  visible?: boolean;
  type?: string;
  onClose?: () => void;
  unmount?: () => void;
}

export type messageType = (typeof messageTypes)[number];

export interface MessageHandler {
  close: () => void;
}

export type MessageFn = {
  (options?: MessageProps): MessageHandler;
  closeAll(type?: messageType): void;
};

export type MessageTypedFn = (options?: MessageProps) => MessageHandler;

export interface Message extends MessageFn {
  success: MessageTypedFn;
  warning: MessageTypedFn;
  info: MessageTypedFn;
  error: MessageTypedFn;
}
