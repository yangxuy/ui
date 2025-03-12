# Space 间距

虽然我们拥有 Divider 组件，但很多时候我们需要不是一个被 Divider 组件 分割开的页面结构，因此我们会重复的使用很多的 Divider 组件，这在我们的开发效率上造成了一定的困扰。 间距组件就是为了解决这种困扰应运而生的。

### 基础用法

最基础的用法，通过这个组件来给组件之间提供统一的间距。

通过间距组件来给多个组件之间提供间距

<preview path="../examples/space/space.vue" ></preview>

### 垂直布局

使用 direction 来控制布局的方式, 背后实际上是利用了 flex-direction 来控制.

我们也提供垂直布局方式。

<preview path="../examples/space/space-2.vue" ></preview>

### 字母数字类型分隔符

<preview path="../examples/space/space-3.vue" ></preview>

### 填充容器

通过 fill**（布尔类型）**参数，您可以控制子节点是否自动填充容器。

下面的例子中，当设置为 fill 时，子节点的宽度会自动适配容器的宽度。

用 fill 属性让子节点自动填充容器

<preview path="../examples/space/space-4.vue" ></preview>

## API

### Attributes

| Name      | Description | Type                                                                                                                          | Default    |
| --------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------- | ---------- |
| alignment | 对其方式    | ^[enum]`'center' \| 'normal' \| 'stretch' \| ...` [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) | center     |
| direction | 排列的方向  | ^[enum]`'vertical' \| 'horizontal'`                                                                                           | horizontal |
| style     | 额外样式    | ^[string] / ^[object]`CSSProperties \| CSSProperties[] \| string[]`                                                           | —          |
| spacer    | 间隔符      | ^[string] / ^[number] / ^[VNode]                                                                                              | —          |
| size      | 间隔大小    | ^[enum]`'default' \| 'small' \| 'large'` / ^[number] / ^[array]`[number, number]`                                             | small      |
| wrap      | 是否换行    | ^[boolean]                                                                                                                    | false      |
| fill      | 是否填充    | ^[boolean]                                                                                                                    | false      |
