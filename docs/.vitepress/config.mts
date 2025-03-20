import { defineConfig } from "vitepress";
import {
  componentPreview,
  containerPreview,
} from "@vitepress-demo-preview/plugin";

export default defineConfig({
  title: "天涯的博客",
  description: "一个Vue3 UI组件库",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "说明", link: "/" },
      { text: "指南", link: "/guide/nav" },
      { text: "组件库", link: "/components/button" },
    ],

    sidebar: {
      "/guide": [
        {
          text: "基础",
          items: [
            { text: "设计", link: "/guide/design" },
            { text: "安装", link: "/guide/nav" },
          ],
        },
      ],
      "/components": [
        {
          text: "基础组件",
          items: [
            { text: "button 按钮", link: "/components/button" },
            { text: "Layout布局", link: "/components/layout" },
            { text: "Space布局", link: "/components/space" },
            { text: "container 布局", link: "/components/container" },
          ],
        },
        {
          text: "Form表单",
          items: [
            { text: "form表单", link: "/components/form" },
            { text: "input输入", link: "/components/input" },
            { text: "select选择", link: "/components/select" },
          ],
        },
        {
          text: "反馈组件",
          items: [
            { text: "dialog对话框", link: "/components/dialog" },
            { text: "drawer抽屉", link: "/components/drawer" },
            { text: "loading加载", link: "/components/loading" },
            { text: "message消息提示", link: "/components/message" },
            { text: "Notification通知", link: "/components/notify" },
            { text: "Popover弹出窗", link: "/components/popover" },
            { text: "Tooltip提示", link: "/components/tooltip" },
          ],
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/yangxuy/ui" }],
  },
  markdown: {
    theme: {
      light: "vitesse-light",
      dark: "vitesse-dark",
    },
    lineNumbers: true,
    config(md) {
      md.use(componentPreview);
      md.use(containerPreview);
    },
  },
});
