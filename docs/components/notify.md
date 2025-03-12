# Notification 通知

悬浮出现在页面角落，显示全局的通知提醒消息。

### 基础用法

在最简单的情况下，你可以通过设置 title 和 message 属性来设置通知的标题和正文内容。 默认情况下，通知在 4500 毫秒后自动关闭，但你可以通过设置 duration 属性来自定义通知的展示时间。 如果你将它设置为 0，那么通知将不会自动关闭。 需要注意的是 duration 接收一个 Number，单位为毫秒。

<preview path="../examples/notify/notify.vue" ></preview>

### 不同类型的通知

我们提供了四种不同类型的提醒框：success、warning、info 和 error。

<preview path="../examples/notify/notify-2.vue" ></preview>

### 自定义消息弹出的位置

可以让 Notification 从屏幕四角中的任意一角弹出
<preview path="../examples/notify/notify-3.vue" ></preview>

## API

### Options

| Name     | Description            | Type                                                                  | Default   |
| -------- | ---------------------- | --------------------------------------------------------------------- | --------- |
| title    | 标题                   | ^[string]                                                             | ''        |
| message  | 通知栏正文内容         | ^[string] / ^[VNode] / ^[Function]`() => VNode`                       | ''        |
| type     | 通知的类型             | ^[enum]`'success' \| 'warning' \| 'info' \| 'error' \| ''`            | ''        |
| duration | 显示时间, 单位为毫秒。 | ^[number]                                                             | 4500      |
| position | 自定义弹出位置         | ^[enum]`'top-right' \| 'top-left' \| 'bottom-right' \| 'bottom-left'` | top-right |
| onClose  | 关闭时的回调函数       | ^[Function]`() => void`                                               | —         |
| offset   | 相对屏幕的偏移量       | ^[number]                                                             | 0         |
