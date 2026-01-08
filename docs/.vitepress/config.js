import navConfig from "./nav";
import LocalSearchPlugin from "./plugins/localSearchPlugin.js"
const BUILD_YEAR = new Date().getFullYear();
const PROJECT_NAME = "你的项目名称";
const PROJECT_DESCRIPTION = "你的项目描述";
const PROJECT_REPO = "https://github.com/hestiacn/vitepress-new";

export default {
  lang: 'zh-CN',//页面语言
  markdown: {
    codeCopyButtonTitle: '复制代码'
  },
  vite: {
    plugins: [
      LocalSearchPlugin()
    ]
  }, 
  title: `${PROJECT_NAME} | 项目文档`,
  description: PROJECT_DESCRIPTION,
  cleanUrls: false,
  
  head: [
    ['script', {}, `(function(){function updateYear(){var el=document.getElementById('dynamicYear');if(el){var year=new Date().getFullYear();el.textContent!==year.toString()&&(el.textContent=year);}}document.readyState==='loading'?document.addEventListener('DOMContentLoaded',updateYear):updateYear();setInterval(updateYear,3600000);})();`],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover' }],
    ['meta', { name: 'theme-color', content: '#2563eb' }],
    ['meta', { name: 'keywords', content: `${PROJECT_NAME}, 文档, 使用指南, 开发文档` }],
    
    ['link', { rel: 'icon', href: '/favicon.pub/favicon.ico', type: 'image/x-icon'}],
    ['link', { rel: 'icon', href: '/favicon.pub/favicon-16x16.png', type: 'image/png', sizes: '16x16'}],
    ['link', { rel: 'icon', href: '/favicon.pub/favicon-32x32.png', type: 'image/png', sizes: '32x32'}],
    ['link', { rel: 'icon', href: '/favicon.pub/favicon-48x48.png', type: 'image/png', sizes: '48x48'}],
    ['link', { rel: 'apple-touch-icon', href: '/favicon.pub/apple-touch-icon.png', sizes: '180x180'}],
    ['link', { rel: 'icon', href: '/favicon.pub/android-chrome-192x192.png', sizes: '192x192', type: 'image/png'}],
    ['link', { rel: 'icon', href: '/favicon.pub/favicon.svg', type: 'image/svg+xml'}],
    ['link', { rel: 'mask-icon', href: '/favicon.pub/safari-pinned-tab.svg', color: '#ffd100'}],
    ['link', { rel: 'manifest', href: '/favicon.pub/site.webmanifest'}],
  ],
  
  themeConfig: {
    logo: "/logo.svg",
    siteTitle: PROJECT_NAME,
	nav: navConfig.nav,
    socialLinks: [
      { icon: 'github', link: PROJECT_REPO },
      { icon: 'twitter', link: 'https://twitter.com/你的账号' },
      { icon: 'discord', link: 'https://discord.gg/你的邀请码' },
    ],
    
    search: {
      provider: "local",
      options: {
        placeholder: "搜索地图文档",
        minMatchCharLength: 1,
        threshold: 0.3,
        distance: 10000,
        keys: ["title", "content", "headers"],
        tokenize: (text) => {
          return text.split('').filter(char => char.trim());
        },
        translations: {
          button: { buttonText: "搜索文档" },
          modal: {
            noResultsText: "未找到相关内容",
            displayDetails: "显示详细信息",
            resetButtonTitle: "清除搜索条件",
            errorScreen: {
              titleText: "无法获取结果",
              helpText: "请检查网络连接",
            },
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",},},
        },
      },
    },
    
    sidebar: {
      '/': [
        {
          text: '快速开始',
          collapsed: false,
          items: [
            { text: '介绍', link: '/docs/guide/' },
            { text: '安装', link: '/docs/guide/docs1' },
            { text: '配置', link: '/docs/guide/docs2' },
          ]
        },
        {
          text: '基础使用',
          collapsed: false,
          items: [
            { text: '功能一', link: '/docs/guide/docs1' },
            { text: '功能二', link: '/docs/guide/docs2' },
            { text: '常见问题', link: '/docs/guide/docs3' },
          ]
        },
        {
          text: '文档',
          collapsed: false,
          items: [
            { text: '概览', link: '/docs/docs1/' },
            { text: '认证', link: '/docs/docs1/data1' },
            { text: '用户接口', link: '/docs/docs1/data2' },
            { text: '数据接口', link: '/docs/docs1/data3' },
          ]
        }
      ],
    },
    
    editLink: {
      pattern: `${PROJECT_REPO}/edit/master/docs/:path`,
      text: '在 GitHub 上编辑此页面',
    },
    
    footer: {
      message: '基于 <a href="https://vitepress.dev" target="_blank">VitePress</a> 构建',
      copyright: `版权所有 © 2025-<span id="dynamicYear">${BUILD_YEAR}</span> ${PROJECT_NAME} | <a href="${PROJECT_REPO}" target="_blank">开源项目</a>`
    },
    
    outlineTitle: "目录导航",
    lightModeSwitchTitle: '浅色模式',
    darkModeSwitchTitle: '深色模式',
    
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
        timeZone: 'Asia/Shanghai',
      },
    },
    
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    returnToTopLabel: '回到顶部',
  },
};