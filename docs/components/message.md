# Message

常用于主动操作后的反馈提示。 与 Notification 的区别是后者更多用于系统级通知的被动提醒。

### 基础使用

从顶部出现，3 秒后自动消失。

Message 在配置上与 Notification 非常类似，所以部分 options 在此不做详尽解释。 文末有 options 列表，可以结合 Notification 的文档理解它们。 Element Plus 注册了一个全局的 $message 方法用于调用。 Message 可以接收一个字符串或一个 VNode 作为参数，它会被显示为正文内容。

<preview path="../examples/message/message-1.vue" ></preview>

### 不同状态 ​

用来显示「成功、警告、消息、错误」类的操作反馈。

当需要自定义更多属性时，Message 也可以接收一个对象为参数。 比如，设置 type 字段可以定义不同的状态，默认为 info。 此时正文内容以 message 的值传入。 同时，我们也为 Message 的各种 type 注册了方法，可以在不传入 type 字段的情况下像 open4 那样直接调用。
<preview path="../examples/message/message-2.vue" ></preview>

## API

### Options

| Name        | Description                                   | Type                                            | Default |
| ----------- | --------------------------------------------- | ----------------------------------------------- | ------- |
| message     | 消息文字                                      | ^[string] / ^[VNode] / ^[Function]`() => VNode` | ''      |
| customClass | 自定义类名                                    | ^[string]                                       | ''      |
| duration    | 显示时间，单位为毫秒。 设为 0 则不会自动关闭  | ^[number]                                       | 3000    |
| showClose   | 是否显示关闭按钮                              | ^[boolean]                                      | false   |
| onClose     | 关闭时的回调函数, 参数为被关闭的 message 实例 | ^[Function]`() => void`                         | —       |

### Methods

调用 Message 或 this.$message 会返回当前 Message 的实例。 如果需要手动关闭实例，可以调用它的 close 方法。

| Name  | Description       | Type                    |
| ----- | ----------------- | ----------------------- |
| close | close the Message | ^[Function]`() => void` |
