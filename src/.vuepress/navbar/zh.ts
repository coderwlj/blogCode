import { navbar } from 'vuepress-theme-hope';

export const zhNavbar = navbar([
  '/',
  { text: '网址导航', icon: 'discover', link: '/nav/' },
  { text: '个人博客', icon: 'blog', link: '/blog/' },
  {
    text: '读书笔记',
    icon: 'read',
    prefix: '/read/',
    children: [
      {
        text: '编码相关',
        link: 'tech/',
      },
      {
        text: '不止编码',
        link: 'mind/',
      },
    ],
  },
  { text: '英语学习', icon: 'language', link: '/english/' },
]);
