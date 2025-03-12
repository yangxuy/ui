import { Loading } from "./src/service";
import { vLoading } from "./src/directive";
import { App } from "vue";

export const SSLoading = {
  install(app: App) {
    app.directive("loading", vLoading);
  },
  directive: vLoading,
  service: Loading,
};

export {
  vLoading,
  vLoading as SSLoadingDirective,
  Loading as SSLoadingService,
};

export default SSLoading;
