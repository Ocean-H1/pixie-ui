import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  outputPath: 'dist',
  base: '/pixie-ui/',
  publicPath: '/pixie-ui/',
  themeConfig: {
    name: 'Pixie UI',
    logo: '/pixie-ui/logo.png',
    nav: [
      { title: '指南', link: '/guide' },
      { title: '组件', link: '/components' },
    ],
    sidebar: {
      '/guide': [
        {
          title: '介绍',
          children: [
            { title: '快速上手', link: '/guide/getting-started' },
          ],
        },
        {
          title: '设计',
          children: [
            { title: '设计原则', link: '/guide/design-principles' },
            { title: '主题定制', link: '/guide/theming' },
          ],
        },
      ],
      '/components': [
        {
          title: '通用',
          children: [
            { title: 'Button 按钮', link: '/components/button' },
            { title: 'Icon 图标', link: '/components/icon' },
            { title: 'Typography 排版', link: '/components/typography' },
          ],
        },
        {
          title: '布局',
          children: [
            { title: 'Flex 弹性布局', link: '/components/flex' },
            { title: 'Space 间距', link: '/components/space' },
          ],
        },
        {
          title: '数据录入',
          children: [
            { title: 'Input 输入框', link: '/components/input' },
            { title: 'Form 表单', link: '/components/form' },
            { title: 'Rate 评分', link: '/components/rate' },
            { title: 'Select 选择器', link: '/components/select' },
          ],
        },
        {
          title: '数据展示',
          children: [
            { title: 'Table 表格', link: '/components/table' },
            { title: 'Card 卡片', link: '/components/card' },
            { title: 'Tooltip 提示', link: '/components/tooltip' },
            { title: 'Carousel 走马灯', link: '/components/carousel' },
            { title: 'Skeleton 骨架屏', link: '/components/skeleton' },
          ],
        },
        {
          title: '导航',
          children: [
            { title: 'Menu 菜单', link: '/components/menu' },
          ],
        },
        {
          title: '反馈',
          children: [
            { title: 'Modal 弹窗', link: '/components/modal' },
            { title: 'Drawer 抽屉', link: '/components/drawer' },
            { title: 'Watermark 水印', link: '/components/watermark' },
          ],
        },
      ],
    },
    socialLinks: {
      github: 'https://github.com/Ocean-H1/pixie-ui',
    },
  },
  resolve: {
    atomDirs: [
      { type: 'component', dir: '../../packages/core/src' },
    ],
  },
  alias: {
    '@pixie-ui/core': path.resolve(__dirname, '../../packages/core/src'),
    '@pixie-ui/hooks': path.resolve(__dirname, '../../packages/hooks/src'),
    '@pixie-ui/theme': path.resolve(__dirname, '../../packages/theme/src'),
    '@pixie-ui/utils': path.resolve(__dirname, '../../packages/utils/src'),
  }
}); 