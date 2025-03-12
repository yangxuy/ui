# Loading 加载 ​

加载数据时显示动效。

### 区域加载 ​

在需要的时候展示加载动画，防止页面失去响应提高用户体验（例如表格）。

组件库提供了两种调用 Loading 的方法：指令和服务。 对于自定义指令 v-loading，只需要绑定 boolean 值即可。 默认状况下，Loading 遮罩会插入到绑定元素的子节点。 通过添加 body 修饰符，可以使遮罩插入至 Dom 中的 body 上。

<preview path="../examples/loading/loading.vue" ></preview>

### 让加载组件铺满整个屏幕

加载数据时显示全屏动画。

当使用指令方式时，全屏遮罩需要添加 fullscreen 修饰符（遮罩会插入至 body 上） 此时若需要锁定屏幕的滚动，可以使用 lock 修饰符； 当使用服务方式时，遮罩默认即为全屏，无需额外设置。
<preview path="../examples/loading/loading2.vue" ></preview>

## API

### Options

| Name       | Description                             | Type                       | Default       |
| ---------- | --------------------------------------- | -------------------------- | ------------- |
| target     | Loading 需要覆盖的 DOM 节点。           | ^[string] / ^[HTMLElement] | document.body |
| body       | 同 v-loading 指令中的 body 修饰符       | ^[boolean]                 | false         |
| fullscreen | 同 v-loading 指令中的 fullscreen 修饰符 | ^[boolean]                 | true          |
| lock       | 同 v-loading 指令中的 lock 修饰符       | ^[boolean]                 | false         |
| text       | 显示在加载图标下方的加载文案            | ^[string]                  | —             |
| background | 遮罩背景色                              | ^[string]                  | —             |
