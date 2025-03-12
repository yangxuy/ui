# Layout 布局

通过基础的 24 分栏，迅速简便地创建布局。

### 基础布局 ​

使用列创建基础网格布局。

通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。
<preview path="../examples/layout/layout.vue" ></preview>

### 分栏间隔

支持列间距。

行提供 gutter 属性来指定列之间的间距，其默认值为 0。
<preview path="../examples/layout/layout2.vue" ></preview>

### 列偏移

您可以指定列偏移量。

通过制定 col 组件的 offset 属性可以指定分栏偏移的栏数。
<preview path="../examples/layout/layout4.vue" ></preview>

## Row API

### Row Attributes

| Name    | Description               | Type                                                                                         | Default |
| ------- | ------------------------- | -------------------------------------------------------------------------------------------- | ------- |
| gutter  | 栅格间隔                  | ^[number]                                                                                    | 0       |
| justify | flex 布局下的水平排列方式 | ^[enum]`'start' \| 'end' \| 'center' \| 'space-around' \| 'space-between' \| 'space-evenly'` | start   |
| align   | flex 布局下的垂直排列方式 | ^[enum]`'top' \| 'middle' \| 'bottom'`                                                       | —       |
| tag     | 自定义元素标签            | ^[string]                                                                                    | div     |

### Col Attributes

| Name   | Description        | Type      | Default |
| ------ | ------------------ | --------- | ------- |
| span   | 栅格占据的列数     | ^[number] | 24      |
| offset | 栅格左侧的间隔格数 | ^[number] | 0       |
| push   | 栅格向右移动格数   | ^[number] | 0       |
| pull   | 栅格向左移动格数   | ^[number] | 0       |
| tag    | 自定义元素标签     | ^[string] | div     |
