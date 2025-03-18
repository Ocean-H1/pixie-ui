import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'dist',
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
            { title: '什么是 Pixie UI', link: '/guide/introduction' },
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