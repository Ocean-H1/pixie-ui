---
title: Carousel 走马灯
group:
  title: 数据展示
  order: 4
---

# Carousel 走马灯

旋转木马，一组轮播的区域。

## 何时使用

- 当有一组平级的内容需要轮播展示时。
- 当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展示。
- 常用于一组图片或卡片轮播。

## 代码演示

### 基本使用

<code src="./demo/basic.tsx"></code>

### 自动播放

<code src="./demo/autoplay.tsx"></code>

### 带箭头

<code src="./demo/arrows.tsx"></code>

### 渐变效果

<code src="./demo/fade.tsx"></code>

### 指示点位置

<code src="./demo/position.tsx"></code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| arrows | 是否显示箭头 | boolean | false | - |
| autoplay | 是否自动切换 | boolean \| { dotDuration?: boolean } | false | - |
| autoplaySpeed | 自动切换的间隔（毫秒） | number | 3000 | - |
| adaptiveHeight | 高度自适应 | boolean | false | - |
| dotPosition | 面板指示点位置，可选 top bottom left right | string | bottom | - |
| dots | 是否显示面板指示点 | boolean \| { className?: string } | true | - |
| draggable | 是否启用拖拽切换 | boolean | false | - |
| fade | 使用渐变切换动效 | boolean | false | - |
| infinite | 是否无限循环切换 | boolean | true | - |
| speed | 切换动效的时间（毫秒） | number | 500 | - |
| easing | 动画效果 | string | linear | - |
| effect | 动画效果函数 | scrollx \| fade | scrollx | - |
| afterChange | 切换面板的回调 | (current: number) => void | - | - |
| beforeChange | 切换面板的回调 | (current: number, next: number) => void | - | - |
| waitForAnimate | 是否等待切换动画 | boolean | false | - |

## 注意事项

- Carousel 组件是通过 CSS3 的 transform 实现的，不支持 IE9 及以下版本。
- 如果使用 fade 参数，则必须将 effect 设置为 fade，否则不生效。 