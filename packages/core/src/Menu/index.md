# Menu 菜单

菜单是一种允许用户从一组选项中进行选择的界面元素。

## 何时使用

导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。

## 特别说明

菜单项和子菜单需要同时设置 `id` 和 `key` 属性：
- `id` 属性用于内部标识选中的项和展开的子菜单
- `key` 属性是 React 需要的，用于列表渲染的优化

通常情况下，可以让 `id` 和 `key` 的值保持一致，以简化代码。

## 代码演示

### 基本用法

最简单的菜单使用。

<code src="./demo/basic.tsx"></code>

### 水平菜单

水平的顶部导航菜单。

<code src="./demo/horizontal.tsx"></code>

### 嵌套菜单

菜单可以包含子菜单，在垂直模式下点击展开，在水平模式下鼠标悬停展开。

<code src="./demo/nested.tsx"></code>

### 垂直菜单与子菜单

使用垂直菜单和子菜单实现侧边导航菜单。

<code src="./demo/vertical.tsx"></code>

### 禁用菜单项

禁用特定的菜单项或子菜单。

<code src="./demo/disabled.tsx"></code>

## API

### Menu

| 参数               | 说明                               | 类型                         | 默认值       |
| ------------------ | ---------------------------------- | ---------------------------- | ------------ |
| mode               | 菜单类型，垂直或水平               | `'vertical' \| 'horizontal'` | `'vertical'` |
| defaultSelectedKey | 初始选中的菜单项 key               | `string`                     | -            |
| selectedKey        | 当前选中的菜单项 key（受控）       | `string`                     | -            |
| defaultOpenKeys    | 初始展开的 SubMenu 的 keys         | `string[]`                   | `[]`         |
| openKeys           | 当前展开的 SubMenu 的 keys（受控） | `string[]`                   | -            |
| onSelect           | 选择菜单项时的回调                 | `(key: string) => void`      | -            |
| onOpenChange       | 展开/收起子菜单时的回调            | `(keys: string[]) => void`   | -            |
| children           | 菜单内容                           | `React.ReactNode`            | -            |

### MenuItem

| 参数      | 说明                  | 类型                  | 默认值  |
| --------- | --------------------- | --------------------- | ------- |
| id        | 唯一标识符            | `string`              | -       |
| key       | React 需要的 key 属性 | `string`              | -       |
| disabled  | 是否禁用              | `boolean`             | `false` |
| style     | 自定义样式            | `React.CSSProperties` | -       |
| className | 自定义 className      | `string`              | -       |
| children  | 菜单项内容            | `React.ReactNode`     | -       |

### SubMenu

| 参数      | 说明                  | 类型                  | 默认值  |
| --------- | --------------------- | --------------------- | ------- |
| id        | 唯一标识符            | `string`              | -       |
| key       | React 需要的 key 属性 | `string`              | -       |
| title     | 子菜单标题            | `React.ReactNode`     | -       |
| disabled  | 是否禁用              | `boolean`             | `false` |
| style     | 自定义样式            | `React.CSSProperties` | -       |
| className | 自定义 className      | `string`              | -       |
| children  | 子菜单内容            | `React.ReactNode`     | -       |