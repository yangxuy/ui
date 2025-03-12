# Popover 弹出框

### 基础用法 ​

Popover 是在 ElTooltip 基础上开发出来的。 因此对于重复属性，请参考 Tooltip 的文档，在此文档中不做详尽解释。

trigger 属性被用来决定 popover 的触发方式，支持的触发方式： hover、click、focus 或 contextmenu。 如果你想手动控制它，可以设置 :visible 属性。

<preview path="../examples/popover/popover.vue" ></preview>

### 内容可扩展

可以在 Popover 中嵌套其它组件， 以下为嵌套表格的例子。
<preview path="../examples/popover/popover1.vue" ></preview>

### 弹窗方向

可以使用 placement 指定出现的防线
<preview path="../examples/popover/popover2.vue" ></preview>

## API

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
