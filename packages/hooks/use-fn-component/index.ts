import { Component, createApp, toRefs } from "vue";

export interface FnComponentProps extends Record<string, any> {
  target?: HTMLElement;
  closed?: any;
}

export function useFnComponent(App: Component, options: FnComponentProps) {
  let root = options.target;

  if (!root) {
    root = document.body;
    options.target = root;
  }

  const app = createApp(App, {
    ...options,
    unmount() {
      closed();
    },
  });

  const vm = app.mount(document.createElement("div"));

  root.appendChild(vm.$el);

  const closed = () => {
    options.closed?.();
    app.unmount();
  };

  return {
    ...toRefs(options),
    vm,
    closed,
    get $el(): HTMLElement {
      return vm.$el;
    },
  };
}
