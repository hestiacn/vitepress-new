---
layout: home
title: VitePress文档模板
titleTemplate: 开箱即用的文档解决方案

hero:
  name: VitePress文档模板
  text: 功能完备，开箱即用
  tagline: 预配置复制代码、返回顶部、本地搜索等实用功能，基于VitePress快速搭建优雅文档
  image:
    src: /logo.svg
    alt: VitePress文档模板Logo
  actions:
    - theme: brand
      text: 立即开始
      link: /docs/docs1
      icon: ⚡
    - theme: brand
      text: 查看项目代码
      link: https://github.com/hestiacn/vitepress-new
      icon: 📖
    - theme: brand
      text: 在线预览
      link: https://wow-map.pages.dev
      icon: 🌐

features:
  - icon: 📋
    title: 一键复制代码
    details: 内置CopyToClipboardInput组件，用户可一键复制代码块内容，提升开发体验
    link: /docs/docs1
    linkText: 体验复制功能
  - icon: 🔝
    title: 智能返回顶部
    details: BackToTop组件在滚动时自动显示，点击快速返回页面顶部，支持平滑滚动
    link: /docs/docs/data2
    linkText: 查看效果
  - icon: 🔍
    title: 本地全文搜索
    details: 无需外部依赖，内置localSearchPlugin实现全站内容搜索，快速定位信息
    link: /docs/guide/docs2
    linkText: 尝试搜索
  - icon: 🎨
    title: 自定义主题
    details: 预设彩虹效果、SCSS变量、自定义组件，轻松调整品牌色和外观
    link: /docs/guide/docs3
    linkText: 定制主题
  - icon: 📱
    title: 响应式布局
    details: 完美适配移动端和桌面端，支持暗色/亮色模式，提供一致体验
    link: /docs/docs/data3
    linkText: 响应式演示
  - icon: ⚡
    title: VitePress驱动
    details: 基于VitePress构建，享受快速的HMR、优化的构建输出和Markdown增强
    link: /docs/docs/index
    linkText: 技术细节
  - icon: 🛠️
    title: 组件化设计
    details: 模块化的Vue组件设计，方便扩展和自定义功能组件
    link: /contribute
    linkText: 开发指南
  - icon: 📈
    title: CI/CD就绪
    details: 预置GitHub Actions工作流，自动化部署到GitHub Pages或Vercel
    link: /.github/workflows/deploy.yml
    linkText: 查看配置
---