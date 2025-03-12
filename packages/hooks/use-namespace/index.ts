import {
  computed,
  getCurrentInstance,
  inject,
  InjectionKey,
  Ref,
  ref,
  unref,
} from "vue";

const statePrefix = "is-";

export const defaultNamespace = "ss";

export const namespaceContextKey: InjectionKey<Ref<string | undefined>> =
  Symbol("namespaceContextKey");

const _bem = (
  namespace: string,
  block: string,
  blockSuffix: string,
  element: string,
  modifier: string
) => {
  let cls = `${namespace}-${block}`;
  // el-form-item
  if (blockSuffix) {
    cls += `-${blockSuffix}`;
  }

  //  el-form-item__prefix
  if (element) {
    cls += `__${element}`;
  }

  // el-form-item--disable
  if (modifier) {
    cls += `--${modifier}`;
  }

  return cls;
};

export const useGetDerivedNamespace = (
  namespaceOverrides?: Ref<string | undefined>
) => {
  const derivedNamespace =
    namespaceOverrides ||
    (getCurrentInstance()
      ? inject(namespaceContextKey, ref(defaultNamespace))
      : ref(defaultNamespace));
  const namespace = computed(() => {
    return unref(derivedNamespace) || defaultNamespace;
  });
  return namespace;
};

export function useNameSpace(
  block: string,
  namespaceOverrides?: Ref<string | undefined>
) {
  const namespace = useGetDerivedNamespace(namespaceOverrides);

  const b = (blockSuffix = "") =>
    _bem(namespace.value, block, blockSuffix, "", "");

  const e = (element?: string) =>
    element ? _bem(namespace.value, block, "", element, "") : "";

  const m = (modifier?: string) =>
    modifier ? _bem(namespace.value, block, "", "", modifier) : "";

  const is: {
    (name: string, state: boolean | undefined): string;
    (name: string): string;
  } = (name: string, ...args: [boolean | undefined] | []) => {
    const state = args.length >= 1 ? args[0] : true;
    return name && state ? `${statePrefix}${name}` : "";
  };

  // --el-xxx: value;
  const cssVar = (object: Record<string, string>) => {
    const styles: Record<string, string> = {};
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace.value}-${key}`] = object[key];
      }
    }
    return styles;
  };

  // with block
  const cssVarBlock = (object: Record<string, any>) => {
    const styles: Record<string, any> = {};
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace.value}-${block}-${key}`] = object[key];
      }
    }
    return styles;
  };

  return {
    b,
    e,
    m,
    is,
    cssVar,
    cssVarBlock,
  };
}

export type UseNamespaceReturn = ReturnType<typeof useNameSpace>;
