import { hopeTheme } from 'vuepress-theme-hope';
import { zhNavbar } from './navbar/index.js';
import { zhSidebar } from './sidebar/index.js';

export default hopeTheme({
  hostname: 'https://coderwlj.github.io/notes/',

  author: {
    name: 'Mr.Wang',
    url: 'https://coderwlj.github.io/notes/',
  },

  iconAssets: 'iconfont',

  logo: '/avator.png',

  repo: 'https://github.com/coderwlj/notes.git',

  repoDisplay: true,

  repoLabel: 'GitHub',

  docsDir: 'src',
  docsRepo: 'https://github.com/coderwlj/notes.git',

  navbarLayout: {
    left: ['Brand'],
    center: ['Links'],
    right: ['Search', 'Outlook', 'Repo'],
  },

  pageInfo: ['Date', 'Category', 'Tag', 'ReadingTime'],

  // 路径导航
  breadcrumb: true,
  // 路径导航的图标显示
  breadcrumbIcon: true,
  // 用户可以自定义的多主题色
  themeColor: {
    yellow: '#FEC201',
    pink: '#EF699F',
    purple: '#684CCE',
    orange: '#FF8C3D',
  },
  // 暗黑模式切换-在深色模式和浅色模式中切换
  // switch  toggle  auto  enable   disable
  darkmode: 'toggle',
  // 全屏按钮
  fullscreen: true,
  // 返回顶部按钮-下滑300px后显示,也可以设置成大的数字,让其更晚触发
  backToTop: true,
  // 纯净模式-禁用
  pure: false,
  // 文章的最后更新时间
  lastUpdated: true,
  contributors: false,

  locales: {
    /**
     * Chinese locale config
     */
    '/': {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: 'wljの学习笔记',

      displayFooter: false,
    },
  },
  // 博客配置
  blog: {
    // 头像
    avatar: '/R-C.gif',
    // 名称
    name: 'Mr.Wang',
    // 是否是圆形头像
    roundAvatar: true,
    // 个人描述
    description: '勿在浮沙筑高台',
    // 博客的侧边栏设置
    sidebarDisplay: 'mobile',
    // 每页展示的文章数量(分页)
    articlePerPage: 7,
    // 时光轴顶部文字
    timeline: 'Wljの博客时光轴🍃',
    medias: {
      QQ: 'https://qm.qq.com/cgi-bin/qm/qr?k=jTZ2TWo9s3vEEFV6KukVxW_NfPFgxPMg&noverify=0&personal_qrcode_source=4',
      Gmail: 'ljwang0422@gmail.com',
      GitHub: 'https://github.com/coderwlj',
      Gitee: 'https://gitee.com/coderwlj',
    },
  },

  encrypt: {
    // 指定路径加密
    config: {
      '/nav/sia/sia.html': ['wlj123...'],
    },
  },

  plugins: {
    // Disable features you don’t want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      // figure: true,
      flowchart: true,
      gfm: true,
      imageLazyload: true,
      imageSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ['ts', 'vue'],
      },
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
      },
      stylize: [
        {
          matcher: 'Recommended',
          replacer: ({ tag }) => {
            if (tag === 'em')
              return {
                tag: 'Badge',
                attrs: { type: 'tip' },
                content: 'Recommended',
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
    // 开启博客
    blog: {
      // 关闭自动生成摘要
      excerpt: false,
    },
    copyCode: {
      // 在移动端也可以实现复制代码
      showInMobile: true,
      // 代码复制成功提示消息的时间-ms
      duration: 2000,
      // 纯净模式
      pure: false,
    },
    // 部署后关闭sitemap插件,调试可以打开
    // sitemap: false,
  },
});
