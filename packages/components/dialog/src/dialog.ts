import { InjectionKey } from "vue";

export interface DialogProps {
  appendTo?: string;
  beforeClose?: () => boolean | Promise<boolean>;
  closeOnClickModal?: boolean;
  closeOnPressEscape?: boolean;
  width: number | string;
  top: number | string;
  fullscreen?: boolean;
  center?: boolean;
  showClose?: boolean;
  footer?: boolean;
  onCancel?: () => void;
  onConfirm?: () => void;
  title: string;
  lockScroll: boolean;
}

export const dialogInjectionKey: InjectionKey<{
  onCancel?: () => void;
  onConfirm?: () => void;
  onClose?: () => void;
}> = Symbol("dialogInjectionKey");
