# VitePress 文档模板

一个开箱即用的 VitePress 文档站点模板，预配置了丰富的功能和组件，帮助您快速搭建优雅、高效的文档系统。

## ✨ 特性

- 🚀 **快速启动** - 基于 VitePress，构建速度极快
- 📋 **代码复制** - 一键复制代码块内容
- 🔝 **返回顶部** - 智能显示，平滑滚动
- 🔍 **本地搜索** - 无需外部服务，全文搜索
- 🎨 **主题定制** - 支持彩虹效果、自定义样式
- 📱 **响应式设计** - 完美适配移动端和桌面端
- ⚡ **Vue 3 驱动** - 享受现代前端开发体验
- 🔧 **Element Plus** - 丰富的UI组件库
- 📈 **CI/CD 就绪** - 预置 GitHub Actions 工作流

## 📦 快速开始

### 环境要求
- Node.js 18+ 
- pnpm 8+ (推荐) 或 npm 9+ / yarn 1.22+

### 安装步骤

1. **克隆项目**
```bash
git clone https://github.com/hestiacn/vitepress-new
cd your-repo
```

2. **安装依赖**
```bash
pnpm install
# 或使用 npm
npm install
```

3. **启动开发服务器**
```bash
pnpm docs:dev
# 或使用 npm
npm run docs:dev
```

4. **构建生产版本**
```bash
pnpm docs:build
pnpm docs:preview
```

## 🗂️ 项目结构

```
├── docs/                          # 文档目录
│   ├── .vitepress/               # VitePress 配置
│   │   ├── nav/                  # 导航配置
│   │   ├── plugins/              # 自定义插件
│   │   ├── theme/                # 主题配置
│   │   │   ├── components/       # 自定义组件
│   │   │   │   ├── BackToTop.vue      # 返回顶部组件
│   │   │   │   ├── CopyToClipboardInput.vue  # 代码复制组件
│   │   │   │   └── NotFound.vue       # 404页面组件
│   │   │   ├── styles/           # 样式文件
│   │   │   └── index.js          # 主题入口
│   │   └── config.js             # 站点配置
│   ├── docs/                     # 文档内容
│   ├── guide/                    # 使用指南
│   ├── public/                   # 静态资源
│   ├── index.md                  # 首页
│   └── pages.md                  # 页面配置
├── .github/workflows/            # GitHub Actions 工作流
├── package.json                  # 项目配置
└── README.md                     # 项目说明
```

## 🎨 自定义配置

### 1. 基本信息配置
编辑 `docs/.vitepress/config.js`：
```javascript
const PROJECT_NAME = "你的项目名称";
const PROJECT_DESCRIPTION = "你的项目描述";
const PROJECT_REPO = "https://github.com/你的用户名/你的仓库名";
```

### 2. 导航配置
编辑 `docs/.vitepress/nav/index.js`：
```javascript
export default {
  nav: [
    { text: '指南', link: '/guide/' },
    { text: '文档', link: '/docs/' },
    { text: '关于', link: '/about' },
  ]
}
```

### 3. 主题样式
- **自定义变量**: `theme/styles/vars.css`
- **彩虹效果**: `theme/styles/rainbow.css`
- **SCSS样式**: `theme/styles/custom.scss`

### 4. 添加新页面
创建 Markdown 文件：
```markdown
---
title: 页面标题
description: 页面描述
---

# 页面内容

## 章节标题

内容...
```

## 🔧 功能组件

### 复制代码按钮
所有代码块自动显示复制按钮：
```js
// 示例代码
console.log('Hello World');
```

### 返回顶部按钮
滚动页面时自动显示，点击返回顶部。

### 本地搜索
在右上角搜索框输入关键词，实现全文搜索。

### 响应式侧边栏
自动适配不同屏幕尺寸。

## 🚀 部署

### GitHub Pages
1. 推送代码到 GitHub
2. 启用 GitHub Pages（Settings > Pages）
3. 选择 `gh-pages` 分支

### Vercel / Netlify
导入项目并自动部署。

### 自定义服务器
构建后部署 `docs/.vitepress/dist` 目录。

## 📝 开发指南

### 添加自定义组件
1. 在 `theme/components/` 创建 Vue 组件
2. 在 `theme/index.js` 中注册：
```javascript
import MyComponent from './components/MyComponent.vue'

export default {
  enhanceApp(ctx) {
    ctx.app.component('MyComponent', MyComponent)
  }
}
```

### 扩展 Markdown 功能
在 `config.js` 中配置：
```javascript
export default {
  markdown: {
    config: (md) => {
      // 使用 markdown-it 插件
      md.use(require('markdown-it-emoji'))
    }
  }
}
```

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [VitePress](https://vitepress.dev/) - 优秀的静态站点生成器
- [Vue.js](https://vuejs.org/) - 渐进式 JavaScript 框架
- [Element Plus](https://element-plus.org/) - Vue 3 UI 组件库

## 📞 支持

- 提交 [Issue](https://github.com/your-username/your-repo/issues)
- 查看 [文档](https://your-site.com)
- 加入 [讨论](https://github.com/your-username/your-repo/discussions)

---

**开始使用** → [查看文档](https://your-site.com)

**有问题？** → [提交 Issue](https://github.com/your-username/your-repo/issues/new)

**喜欢这个项目？** → [⭐ Star 支持](https://github.com/your-username/your-repo)

---

<div align="center">
  
  [![VitePress](https://img.shields.io/badge/VitePress-^1.0.0-646CFF?logo=vite&logoColor=white)](https://vitepress.dev)
  [![Vue](https://img.shields.io/badge/Vue-^3.3.0-4FC08D?logo=vue.js&logoColor=white)](https://vuejs.org)
  [![Element Plus](https://img.shields.io/badge/Element%20Plus-^2.3.8-409EFF?logo=element-plus&logoColor=white)](https://element-plus.org)
  [![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
  [![GitHub stars](https://img.shields.io/github/stars/your-username/your-repo?style=social)](https://github.com/your-username/your-repo)

</div>