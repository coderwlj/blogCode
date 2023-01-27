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
      text: '后端',
      prefix: 'backend/',
      collapsible: true,
      children: [],
    },
    {
      text: '资源 & 博客',
      prefix: 'resources/',
      collapsible: true,
      children: ['blog', 'algorithm'],
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
      text: '各类教程',
      prefix: 'tutorial/',
      collapsible: true,
      children: ['tutorial'],
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
      text: '文学哲思',
      prefix: 'literature/',
      collapsible: true,
      children: ['', 'reject'],
    },
    {
      text: '技术书籍',
      prefix: 'tech/',
      collapsible: true,
      children: [],
    },
    {
      text: '个人思考',
      prefix: 'mind/',
      collapsible: true,
      children: [],
    },
  ],
});
