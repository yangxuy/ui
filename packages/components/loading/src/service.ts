import LoadingComponent from "./loading.vue";
import { LoadingProps } from "./loading";
import { useFnComponent } from "@yx-ui/hooks";

const addStyle = (options: LoadingProps, dom: HTMLElement) => {
  if (options.target !== document.body) {
    options.target!.style.position = "relative";
    window.requestAnimationFrame(() => {
      const client = dom.getBoundingClientRect();
      const { height } = dom.children[0].getBoundingClientRect();
      if (client.height < height) {
        dom.style.setProperty(
          "--ss-loading-spinner-size",
          client.height + "px"
        );
      }
    });
  }
};

export const Loading = (options: LoadingProps) => {
  const instance = useFnComponent(LoadingComponent, options);
  addStyle(options, instance.$el);
  return instance;
};

export type LoadingInstance = ReturnType<typeof Loading>;
