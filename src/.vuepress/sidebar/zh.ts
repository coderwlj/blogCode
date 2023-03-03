import { sidebar } from 'vuepress-theme-hope';

export const zhSidebar = sidebar({
  // 导航侧边栏
  '/nav/': [
    '',
    {
      text: '编程语言',
      prefix: 'lang/',
      collapsible: true,
      children: ['go', 'java'],
    },
    {
      text: '博客',
      prefix: 'resources/',
      collapsible: true,
      children: ['blog'],
    },
    {
      text: '科学上网',
      prefix: 'sia/',
      collapsible: true,
      children: ['sia'],
    },
    {
      text: '网站开发部署',
      prefix: 'static/',
      collapsible: true,
      children: ['static'],
    },
    {
      text: '工具',
      prefix: 'tools/',
      collapsible: true,
      children: ['crack', 'tool'],
    },
    {
      text: '素材设计',
      prefix: 'ui/',
      collapsible: true,
      children: ['style'],
    },
  ],
});
