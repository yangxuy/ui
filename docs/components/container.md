# Container 布局容器

用于布局的容器组件，方便快速搭建页面的基本结构：

ss-container：外层容器。 当子元素中包含 ss-header 或 ss-footer 时，全部子元素会垂直上下排列， 否则会水平左右排列。

ss-header：顶栏容器。

ss-aside：侧边栏容器。

ss-main：主要区域容器。

ss-footer：底栏容器。

### 常见页面布局

<preview path="../examples/container/container.vue" ></preview>
<preview path="../examples/container/container2.vue" ></preview>
<preview path="../examples/container/container3.vue" ></preview>

## Container API

### Container Attributes

| Name      | Description      | Subtags                     |
| --------- | ---------------- | --------------------------- |
| direction | 子元素的排列方向 | vertical，否则为 horizontal |

### Container Slots

| Name    | Description    | Subtags                                    |
| ------- | -------------- | ------------------------------------------ |
| default | 自定义默认内容 | Container / Header / Aside / Main / Footer |

## Header API

### Header Attributes

| Name   | Description | Type      | Default |
| ------ | ----------- | --------- | ------- |
| height | 顶栏高度    | ^[string] | 60px    |

### Header Slots

| Name    | Description    |
| ------- | -------------- |
| default | 自定义默认内容 |

## Aside API

### Aside Attributes

| Name  | Description | Type      | Default |
| ----- | ----------- | --------- | ------- |
| width | 侧边栏宽度  | ^[string] | 300px   |

### Aside Slots

| Name    | Description    |
| ------- | -------------- |
| default | 自定义默认内容 |

## Main API

### Main Slots

| Name    | Description    |
| ------- | -------------- |
| default | 自定义默认内容 |

## Footer API

### Footer Attributes

| Name   | Description | Type      | Default |
| ------ | ----------- | --------- | ------- |
| height | 底栏高度    | ^[string] | 60px    |

### Footer Slots

| Name    | Description    |
| ------- | -------------- |
| default | 自定义默认内容 |
