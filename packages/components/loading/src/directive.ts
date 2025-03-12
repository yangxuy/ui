import { Directive, DirectiveBinding } from "vue";
import { Loading, LoadingInstance } from "./service";
import { LoadingProps } from "./loading";

const INSTANCE_KEY = Symbol("ElLoading");

interface ElementLoading extends HTMLElement {
  [INSTANCE_KEY]?:
    | {
        instance: LoadingInstance;
        options: LoadingProps;
      }
    | undefined;
}

export type LoadingBinding = boolean;

const createInstance = (
  el: ElementLoading,
  binding: DirectiveBinding<LoadingBinding>
) => {
  const getProp = (name: string) => el.getAttribute(`element-loading-${name}`);

  const fullscreen = binding.modifiers.fullscreen;

  const options: LoadingProps = {
    text: getProp("text"),
    customClass: getProp("customClass"),
    fullscreen,
    target: fullscreen ? undefined : el,
    lock: binding.modifiers.lock,
  };

  el[INSTANCE_KEY] = {
    options,
    instance: Loading(options),
  };
};

export const vLoading: Directive<ElementLoading, LoadingBinding> = {
  mounted(el, binding) {
    if (binding.value) {
      createInstance(el, binding);
    }
  },

  updated(el, binding) {
    const instance = el[INSTANCE_KEY];
    if (binding.oldValue !== binding.value) {
      if (binding.value && !binding.oldValue) {
        createInstance(el, binding);
      } else {
        instance?.instance.closed();
      }
    }
  },

  unmounted(el) {
    el[INSTANCE_KEY]?.instance.closed();
    el[INSTANCE_KEY] = undefined;
  },
};
