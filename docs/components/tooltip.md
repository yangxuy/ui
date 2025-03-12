# Tooltip 文字提示

常用于展示鼠标 hover 时的提示信息。

### 基础用法

在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。
<preview path="../examples/tooltip/tooltip.vue" ></preview>

### 显示 HTML 内容

内容属性可以设置为 HTML 字符串。
<preview path="../examples/tooltip/tooltip1.vue" ></preview>

### Attributes

| Name      | Description | Type                          | Default  |
| --------- | ----------- | ----------------------------- | -------- |
| trigger   | 触发方式    | 'click' \| 'focus' \| 'hover' | 'click'  |
| content   | 内容        | string                        |          |
| width     | 宽度        | number                        |          |
| placement | 出现的位置  | top bottom right left         | 'bottom' |

### Slots

| 插槽名  | 说明     |
| ------- | -------- |
| default | 触发内容 |
| content | 弹窗内容 |
