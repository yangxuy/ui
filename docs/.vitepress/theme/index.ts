import DefaultTheme from "vitepress/theme";

import { AntDesignContainer } from "@vitepress-demo-preview/component";
import "@vitepress-demo-preview/component/dist/style.css";

// 全部引入
import YXUI from "@yx-ui/components";

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData }) => {
    app.use(YXUI);
    app.component("demo-preview", AntDesignContainer);
  },
};
