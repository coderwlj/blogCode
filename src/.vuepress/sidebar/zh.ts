import { sidebar } from 'vuepress-theme-hope';

export const zhSidebar = sidebar({
  // 导航侧边栏
  '/nav/': [
    '',
    {
      text: '前端',
      prefix: 'front/',
      collapsible: true,
      children: ['vue', 'react', 'node'],
    },
    {
      text: '编程语言',
      prefix: 'lang/',
      collapsible: true,
      children: ['cpp', 'go', 'java', 'JavaScript', 'python'],
    },
    {
      text: '资源 & 博客',
      prefix: 'resources/',
      collapsible: true,
      children: ['blog', 'algorithm', 'tech'],
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
      children: ['static', 'website'],
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
      children: ['style', 'design', 'pic'],
    },
  ],
  '/read/': [
    '',
    {
      text: '编码相关',
      prefix: 'tech/',
      collapsible: true,
      children: [],
    },
    {
      text: '不止编码',
      prefix: 'mind/',
      collapsible: true,
      children: ['book01', 'book02'],
    },
  ],
});
