# Dialog 对话框 ​

在保留当前页面状态的情况下，告知用户并承载相关操作。

### 基础用法

Dialog 弹出一个对话框，适合需要定制性更大的场景。

需要设置 model-value / v-model 属性，它接收 Boolean，当为 true 时显示 Dialog。 Dialog 分为两个部分：body 和 footer，footer 需要具名为 footer 的 slot。 title 属性用于定义标题，它是可选的，默认值为空。 最后，本例还展示了 before-close 的用法。

<preview path="../examples/dialog/dialog.vue" ></preview>

### 自定义内容

对话框的内容可以是任何东西，甚至是一个表格或表单。 此示例显示如何在 Dialog 中使用 Element Plus 的表格和表单。

<preview path="../examples/dialog/dialog2.vue" ></preview>

### 全屏

设置 fullscreen 属性来打开全屏对话框。

<preview path="../examples/dialog/dialog3.vue" ></preview>
