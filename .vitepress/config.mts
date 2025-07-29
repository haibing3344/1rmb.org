import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '一元机场',
  description: '一元机场提供快速稳定的VPN服务，轻松突破网络限制，自由访问全球互联网。支持多平台，操作简单，提供免费试用，稳定安全，适合海外华人、外贸和跨境用户科学上网，中国便宜好用的VPN首选。',
  head: [
    // 基础meta标签
    ['meta', { name: 'keywords', content: 'VPN, 一元机场, 中国VPN, 科学上网, 免费VPN, 翻墙, 便宜VPN, 稳定VPN, 提速, 机场, 跨境网络, 外贸, 海外华人VPN' }],
    ['meta', { name: 'description', content: '一元机场提供快速稳定的VPN服务，轻松突破网络限制，自由访问全球互联网。支持多平台，操作简单，提供免费试用，稳定安全，适合海外华人、外贸和跨境用户科学上网，中国便宜好用的VPN首选。' }],
    ['meta', { name: 'author', content: '一元机场' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' }],
    
    // Open Graph标签
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: '一元机场' }],
    ['meta', { property: 'og:title', content: '一元机场 - 快速稳定的VPN科学上网服务' }],
    ['meta', { property: 'og:description', content: '一元机场提供快速稳定的VPN服务，轻松突破网络限制，自由访问全球互联网。支持多平台，操作简单，提供免费试用，稳定安全，适合海外华人、外贸和跨境用户科学上网，中国便宜好用的VPN首选。' }],
    ['meta', { property: 'og:url', content: 'https://1rmb.org' }],
    ['meta', { property: 'og:image', content: 'https://1rmb.org/logo.png' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    
    // Twitter卡片标签
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@1yuan_win' }],
    ['meta', { name: 'twitter:title', content: '一元机场 - 快速稳定的VPN科学上网服务' }],
    ['meta', { name: 'twitter:description', content: '一元机场提供快速稳定的VPN服务，轻松突破网络限制，自由访问全球互联网。支持多平台，操作简单，提供免费试用，稳定安全，适合海外华人、外贸和跨境用户科学上网，中国便宜好用的VPN首选。' }],
    ['meta', { name: 'twitter:image', content: 'https://1rmb.org/logo.png' }],
    
    // 其他SEO标签
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/logo.png' }]
  ],
  themeConfig: {
    nav: [
      { text: "下载", link: "/download.md" },
      { 
        text: "教程", 
        items: [
          { text: "安卓教程", link: "/tutorial/android.md" },
          { text: "iOS教程", link: "/tutorial/ios.md" },
          { text: "Windows教程", link: "/tutorial/windows.md" },
          { text: "Mac教程", link: "/tutorial/macos.md" }
        ]
      },
      { text: "订阅", link: "/subscribe.md" },
      { text: "FAQ", link: "/faq.md" },
      { text: '登录/注册', link: 'https://a.suola.link/1yuan' }

    ],
    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '下载', link: '/download.md' },
          { 
            text: '教程', 
            collapsed: false,
            items: [
              { text: "安卓教程", link: "/tutorial/android.md" },
              { text: "iOS教程", link: "/tutorial/ios.md" },
              { text: "Windows教程", link: "/tutorial/windows.md" },
              { text: "Mac教程", link: "/tutorial/macos.md" }
            ] 
          },
          { text: '订阅', link: '/subscribe.md' },
          { text: 'FAQ', link: '/faq.md' },
        ]
      }
    ],
    //socialLinks: [
     // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    //]
  // 文章翻页
  docFooter: {
  prev: '上一篇',
  next: '下一篇'
  },
      
    // 移动端 - 外观
  darkModeSwitchLabel: '外观',
      
    // 移动端 - 返回顶部
  returnToTopLabel: '返回顶部',
      
  // 移动端 - menu
  sidebarMenuLabel: '菜单',
      
  outlineTitle: '本页导航',
      // 站点页脚配置
  footer: {
    message: "一元机场,一元机场登录地址,一元机场官网,一元机场ink",
    copyright: 'Copyright © 2025  <a href="/"> 一元机场 </a> | <a href="https://a.suola.link/1yuan">登录/注册</a>'
  },
  // 搜索   
  search: {
    provider: 'local'
  },
},

cleanUrls: false, // 禁用干净URL，保留.html后缀
  // 站点地图
  sitemap: {
    hostname: 'https://1rmb.org'
  }

})
