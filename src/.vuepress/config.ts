import { defineUserConfig } from 'vuepress';
import theme from './theme.js';
import { searchPlugin } from '@vuepress/plugin-search';

export default defineUserConfig({
  base: '/notes/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'coderwlj',
      description: 'wljの学习笔记',
    },
  },

  theme,

  shouldPrefetch: false,
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索',
        },
      },
      // 热键支持
      hotKeys: ['command', 'k'],
      // 最大推荐个数
      maxSuggestions: 7,
      // 排除首页
      isSearchable: (page) => page.path !== '/',
    }),
  ],
});
