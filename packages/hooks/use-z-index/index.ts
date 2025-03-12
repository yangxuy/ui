import {
  computed,
  getCurrentInstance,
  inject,
  InjectionKey,
  Ref,
  ref,
  unref,
} from "vue";

export interface ElZIndexInjectionContext {
  current: number;
}

const initial: ElZIndexInjectionContext = {
  current: 1000,
};

const zIndex = ref(1000);

export const defaultInitialZIndex = 2000;

export const ZINDEX_INJECTION_KEY: InjectionKey<ElZIndexInjectionContext> =
  Symbol("elZIndexContextKey");

export function useZIndex() {
  const increasingInjection = getCurrentInstance()
    ? inject(ZINDEX_INJECTION_KEY, initial)
    : initial;

  const currentZIndex = computed(() => zIndex.value);

  return {
    currentZIndex,
    nextZIndex() {
      increasingInjection.current++;
      zIndex.value = increasingInjection.current;
      return currentZIndex.value;
    },
  };
}
