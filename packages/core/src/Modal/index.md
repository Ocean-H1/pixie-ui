# Modal 对话框

模态对话框。

## 何时使用

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。

另外当需要一个简洁的确认框询问用户时，可以使用 Modal.confirm() 等语法糖方法。

## 代码演示

### 基础示例

最简单的用法，通过控制是否显示对话框。

<code src="./demo/basic.tsx"></code>

### 异步关闭

点击确定后异步关闭对话框，例如提交表单。

<code src="./demo/async.tsx"></code>

### 自定义页脚

使用 `footer` 属性自定义页脚按钮。

<code src="./demo/custom-footer.tsx"></code>

### 使用渲染函数自定义页脚

使用渲染函数自定义页脚内容。

<code src="./demo/render-footer.tsx"></code>

### 显示加载状态

使用 `loading` 显示加载状态，适用于内容加载中的场景。

<code src="./demo/loading.tsx"></code>

### 自定义位置

使用 `centered` 或 `style` 设置对话框位置。

<code src="./demo/position.tsx"></code>

### 自定义关闭图标

使用 `closeIcon` 自定义关闭图标。

<code src="./demo/custom-icon.tsx"></code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| afterClose | Modal 完全关闭后的回调 | function | - |
| afterOpenChange | 打开和关闭 Modal 时动画结束后的回调 | function(open) | - |
| classNames | 配置弹窗内置模块的 className | Record<SemanticDOM, string> | - |
| styles | 配置弹窗内置模块的 style | Record<SemanticDOM, CSSProperties> | - |
| cancelButtonProps | cancel 按钮 props | ButtonHTMLAttributes | - |
| cancelText | 取消按钮文字 | ReactNode | 取消 |
| centered | 垂直居中展示 Modal | boolean | false |
| closable | 是否显示右上角的关闭按钮 | boolean \| { closeIcon?: ReactNode; disabled?: boolean; } | true |
| closeIcon | 自定义关闭图标 | ReactNode | &lt;Icon icon="mdi:close" /&gt; |
| confirmLoading | 确定按钮 loading | boolean | false |
| destroyOnClose | 关闭时销毁 Modal 里的子元素 | boolean | false |
| focusTriggerAfterClose | 对话框关闭后是否需要聚焦触发元素 | boolean | true |
| footer | 底部内容，当不需要默认底部按钮时，可以设为 footer={null} | ReactNode \| ((params: FooterRenderParams) => ReactNode) | (确定取消按钮) |
| forceRender | 强制渲染 Modal | boolean | false |
| getContainer | 指定 Modal 挂载的节点，但依旧为全屏展示，false 为挂载在当前位置 | HTMLElement \| () => HTMLElement \| string \| false | document.body |
| keyboard | 是否支持键盘 esc 关闭 | boolean | true |
| mask | 是否展示遮罩 | boolean | true |
| maskClosable | 点击蒙层是否允许关闭 | boolean | true |
| modalRender | 自定义渲染对话框 | (node: ReactNode) => ReactNode | - |
| okButtonProps | ok 按钮 props | ButtonHTMLAttributes | - |
| okText | 确认按钮文字 | ReactNode | 确定 |
| okType | 确认按钮类型 | 'primary' \| 'secondary' \| 'text' | primary |
| style | 可用于设置浮层的样式，调整浮层位置等 | CSSProperties | - |
| loading | 显示骨架屏 | boolean | false |
| title | 标题 | ReactNode | - |
| open | 对话框是否可见 | boolean | - |
| width | 宽度 | string \| number \| Breakpoint | 520 |
| wrapClassName | 对话框外层容器的类名 | string | - |
| zIndex | 设置 Modal 的 z-index | number | 1000 |
| onCancel | 点击遮罩层或右上角叉或取消按钮的回调 | function(e) | - |
| onOk | 点击确定回调 | function(e) | - |

### FooterRenderParams

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| originOkBtn | 默认确认按钮 | ReactElement |
| originCancelBtn | 默认取消按钮 | ReactElement |

### SemanticDOM

```ts
type SemanticDOM = 'root' | 'body' | 'header' | 'content' | 'footer' | 'mask' | 'wrapper';
``` 