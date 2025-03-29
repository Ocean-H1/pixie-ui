# Message 全局提示

全局展示操作反馈信息。

## 何时使用

- 可提供成功、警告和错误等反馈信息。
- 顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。

## 代码演示

### 基础示例

基本使用方法，四种类型的消息提示。

<code src="./demo/basic.tsx"></code>

### 自定义时长

自定义消息显示的时长。

<code src="./demo/duration.tsx"></code>

### 消息位置

通过 `message.config` 修改消息显示的位置。

<code src="./demo/position.tsx"></code>

### Promise 接口

可以通过 then 接口在关闭后运行回调。

<code src="./demo/promise.tsx"></code>

### 更新消息内容

可以通过唯一的 key 来更新内容。

<code src="./demo/update.tsx"></code>

### 加载中消息

显示加载中的消息，异步更新消息内容。

<code src="./demo/loading.tsx"></code>

### 使用 Hooks（推荐）

通过 `message.useMessage` 创建支持读取 context 的实例。

<code src="./demo/hooks.tsx"></code>

## API

### Message.success(content, [duration], [onClose])

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 提示内容 | ReactNode | - |
| duration | 自动关闭的延时，单位秒。设为 0 时不自动关闭 | number | 3 |
| onClose | 关闭时触发的回调函数 | function | - |

还提供了以下全局方法：

- `Message.error(content, [duration], [onClose])`
- `Message.info(content, [duration], [onClose])`
- `Message.warning(content, [duration], [onClose])`
- `Message.loading(content, [duration], [onClose])`

### Message.open(config)

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 提示内容 | ReactNode | - |
| duration | 自动关闭的延时，单位秒。设为 0 时不自动关闭 | number | 3 |
| getContainer | 配置渲染节点的输出位置，但依旧为全屏展示 | () => HTMLElement | () => document.body |
| maxCount | 最大显示数，超过限制时，最早的消息会被自动关闭 | number | - |
| prefixCls | 消息节点的 className 前缀 | string | pixie-message |
| top | 消息距离顶部的位置 | string \| number | 8 |
| type | 消息类型 | 'success' \| 'error' \| 'info' \| 'warning' \| 'loading' | 'info' |
| icon | 自定义图标 | ReactNode | - |
| onClose | 关闭时触发的回调函数 | function | - |
| style | 自定义内联样式 | CSSProperties | - |
| className | 自定义 CSS class | string | - |
| key | 当前提示的唯一标识 | string \| number | - |

### Message.config(options)

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| duration | 默认自动关闭延时，单位秒 | number | 3 |
| getContainer | 配置渲染节点的输出位置 | () => HTMLElement | () => document.body |
| maxCount | 最大显示数，超过限制时，最早的消息会被自动关闭 | number | - |
| top | 消息距离顶部的位置 | string \| number | 8 |

### Message.useMessage()

```tsx | pure
const [messageApi, contextHolder] = Message.useMessage();
```

通过 `Message.useMessage` 创建支持读取 context 的 `messageApi` 实例，并通过 `contextHolder` 将消息组件插入到需要的位置。

```tsx | pure
<Context1.Provider value="Ant">
  {/* contextHolder 在 Context1 内，能获取到 Context1 的值 */}
  {contextHolder}
  <Context2.Provider value="Design">
    {/* contextHolder 在 Context2 外，不能获取到 Context2 的值 */}
  </Context2.Provider>
</Context1.Provider>
```

### 其他方法

- `Message.update(key, config)` - 更新指定 key 的消息内容
- `Message.destroy()` - 销毁所有消息

### 返回值

所有的消息方法都会返回一个 Promise，可以通过 then 在消息关闭时执行回调。 