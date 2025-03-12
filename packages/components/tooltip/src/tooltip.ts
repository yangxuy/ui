import { Placement } from "@floating-ui/vue";
import { UseNamespaceReturn } from "@yx-ui/hooks";
import { CSSProperties, InjectionKey, MaybeRef, Ref } from "vue";

export interface TooltipProps {
  placement?: Placement;
  trigger?: "click" | "focus" | "hover" | "contextmenu";
  onBlur?: () => void;
  overlayStyle?: CSSProperties;
  content?: string;
  offset?: number;
  destroyOnClose?: boolean;
  disabled?: boolean;
}

export type TooltipContext = {
  onClose: () => void;
  onOpen: () => void;
  toggle: () => void;
  reference: Ref<HTMLElement | null>;
  floating: Ref<HTMLElement | null>;
  ns: UseNamespaceReturn;
};

export const tooltipKey: InjectionKey<TooltipContext> = Symbol("tooltip");
