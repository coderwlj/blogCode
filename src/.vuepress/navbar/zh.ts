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
        text: '文学哲思',
        link: 'literature/',
      },
      {
        text: '技术书籍',
        link: 'tech/',
      },
      {
        text: '其他',
        link: 'mind/',
      },
    ],
  },
  { text: '英语学习', icon: 'language', link: '/english/' },
]);
