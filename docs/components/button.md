# Button 组件

### 基础使用

使用 type、plain、round 来定义按钮的样式。

<preview path="../examples/button/button.vue" ></preview>

### 禁用状态

你可以使用 disabled 属性来定义按钮是否被禁用。

使用 disabled 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。
<preview path="../examples/button/button-disable.vue" ></preview>

### 加载状态

点击按钮来加载数据，并向用户反馈加载状态。

通过设置 loading 属性为 true 来显示加载中状态。
<preview path="../examples/button/button-loading.vue" ></preview>

## Button API

### Button Attributes

| Name     | Description        | Type                                                                                      | Default |
| -------- | ------------------ | ----------------------------------------------------------------------------------------- | ------- |
| size     | 尺寸               | ^[enum]`'large' \| 'default' \| 'small'`                                                  | —       |
| type     | 类型               | ^[enum]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'text' (deprecated)` | —       |
| plain    | 是否为朴素按钮     | ^[boolean]                                                                                | false   |
| round    | 是否为圆角按钮     | ^[boolean]                                                                                | false   |
| circle   | 是否为圆形按钮     | ^[boolean]                                                                                | false   |
| loading  | 是否为加载中状态   | ^[boolean]                                                                                | false   |
| disabled | 按钮是否为禁用状态 | ^[boolean]                                                                                | false   |
| tag      | 自定义元素标签     | ^[string] / ^[Component]                                                                  | button  |
