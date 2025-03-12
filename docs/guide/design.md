# 设计

### 架构设计

采用 monorepo+pnpm 的方式架构项目,采用多包的形式抽离和复用

### 包设计

- 包含文档包
- 组件库 core
- lint 包

### 文档设计

- 使用[vitepress](https://vitepress.dev/zh/)搭建组件库说明文档，具体参考 vitepress 官方介绍
- 组件 preview demo 使用 @vitepress-demo-preview/component 和@vitepress-demo-preview/plugin
