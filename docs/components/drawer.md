# Drawer 抽屉

有些时候, Dialog 组件并不满足我们的需求, 比如你的表单很长, 亦或是你需要临时展示一些文档, Drawer 拥有和 Dialog 几乎相同的 API, 在 UI 上带来不一样的体验.

### 基础用法

呼出一个临时的侧边栏, 可以从多个方向呼出

你必须像 Dialog 一样为 Drawer 设置 model-value 属性来控制 Drawer 的显示与隐藏状态，该属性接受一个 boolean 类型。 Drawer 包含三部分: title & body & footer, 其中 title 是一个具名 slot, 你还可以通过 title 属性来设置标题, 默认情况下它是一个空字符串, 其中 body 部分是 Drawer 组件的主区域, 它包含了用户定义的主要内容. footer 和 title 用法一致, 用来显示页脚信息. 当 Drawer 打开时，默认设置是从右至左打开 30% 浏览器宽度。 你可以通过传入对应的 direction 和 size 属性来修改这一默认行为。 下面一个示例将展示如何使用 before-close API，更多详细用法请参考页面底部的 API 部分。

<preview path="../examples/drawer/drawer.vue" ></preview>

### 不添加 Title

当你不需要标题的时候，你可以将它移除。

<preview path="../examples/drawer/drawer-1.vue" ></preview>

## API

### Attributes

| Name                  | Description                                | Type        | Default |
| --------------------- | ------------------------------------------ | ----------- | ------- |
| model-value / v-model | 是否显示 Drawer                            | ^[boolean]  | -       |
| append-to             | 挂载到哪个 DOM 元素                        | ^[string]   | body    |
| lock-scroll           | 是否在 Drawer 出现时将 body 滚动锁定       | ^[boolean]  | true    |
| before-close          | 关闭前的回调，会暂停 Drawer 的关闭         | ^[Function] | —       |
| close-on-click-modal  | 是否可以通过点击 modal 关闭 Drawer         | ^[boolean]  | true    |
| destroy-on-close      | 控制是否在关闭 Drawer 之后将子元素全部销毁 | ^[boolean]  | false   |
