import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'dist',
  base: '/pixie-ui/',
  publicPath: '/pixie-ui/',
  themeConfig: {
    name: 'Pixie UI',
    logo: '/logo.png',
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
            { title: 'Input 输入框', link: '/components/input' },
            { title: 'Table 表格', link: '/components/table' },
            { title: 'Form 表单', link: '/components/form' },
            { title: 'Menu 菜单', link: '/components/menu' },
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
    '@pixie-ui/*': '../../packages/*/src',
  },
}); 