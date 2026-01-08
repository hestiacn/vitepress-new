---
title: 使用说明                # 页面标题（必填）
#description: 页面详细描述      # SEO 描述
#aside: false                  # 隐藏侧边栏
#lastUpdated: false            # 隐藏最后更新时间
#layout: page                  # 使用页面布局
layout: doc
---
# VitePress 高级项目文档模板

## 概述

这是一个结构完整、功能丰富的 VitePress 项目模板，包含导航配置、主题定制、搜索插件、自动化部署等高级功能，适合个人或者企业级技术文档项目。

::: warning
本项目都配置好了，如果您只需要添加文档只需要修改调整相关文档和导航配置即可！按照本文档操作您可以非常快速的部署一个相关站点上线！
::: 

## 项目结构详解

```
项目根目录/
├── .github/                    # GitHub 相关配置
│   └── workflows/
│       └── deploy.yml         # CI/CD 部署配置
├── docs/                       # 文档根目录
│   ├── .vitepress/            # VitePress 配置
│   │   ├── nav/               # 导航配置
│   │   │   └── index.js       # 导航栏配置
│   │   ├── plugins/           # 自定义插件
│   │   │   └── localSearchPlugin.js  # 本地搜索插件
│   │   ├── theme/             # 主题定制
│   │   │   ├── components/    # 自定义组件
│   │   │   │   ├── BackToTop.vue         # 返回顶部组件
│   │   │   │   ├── CopyToClipboardInput.vue  # 复制到剪贴板组件
│   │   │   │   └── NotFound.vue          # 404页面组件
│   │   │   ├── styles/        # 样式文件
│   │   │   │   ├── custom.scss          # 自定义SCSS样式
│   │   │   │   ├── rainbow.css          # 彩虹特效样式
│   │   │   │   └── vars.css             # CSS变量定义
│   │   │   └── index.js       # 主题入口文件
│   │   └── config.js          # VitePress 主配置文件
│   ├── docs/                  # 文档内容（核心）
│   │   ├── docs/             # API文档部分
│   │   │   ├── data1.md      # API文档1
│   │   │   ├── data2.md      # API文档2
│   │   │   ├── data3.md      # API文档3
│   │   │   └── index.md      # API文档索引
│   │   ├── guide/            # 指南部分
│   │   │   ├── docs1.md      # 指南文档1
│   │   │   ├── docs2.md      # 指南文档2
│   │   │   └── docs3.md      # 指南文档3
│   │   ├── about.md          # 关于页面
│   │   ├── CHANGELOG.md      # 更新日志
│   │   └── contribute.md     # 贡献指南
│   ├── public/               # 静态资源
│   │   └── favicon.pub/      # 网站图标 访问该网站上传你的项目logo会自动生成以下相关文件。
│   │       ├── android-chrome-192x192.png
│   │       ├── android-chrome-512x512.png
│   │       ├── apple-touch-icon-*.png
│   │       ├── favicon-*.png
│   │       ├── favicon.ico
│   │       ├── favicon.svg
│   │       ├── safari-pinned-tab.svg
│   │       └── site.webmanifest
│   ├── _data/                # 数据文件（JSON/JS）
│   │   ├── features.js       # 特性数据
│   │   ├── option.js         # 配置选项数据
│   │   ├── options.js        # 更多配置选项
│   │   └── team.js           # 团队信息
│   ├── index.md              # 首页
│   └── pages.md              # 页面配置
├── .gitignore                # Git忽略配置
├── package.json              # 项目依赖配置
├── pnpm-lock.yaml           # pnpm锁定文件
├── README.md                # 项目说明
└── Tree2Utf8.bat           # 在文件夹内双击该文件即可生成所有文件路径的目录
```

## 快速开始

### 1. 环境准备

```bash
# 确保已安装以下工具
node --version  # >= 18.0.0
pnpm --version  # >= 7.0.0 或 npm/yarn
```

### 2. 安装依赖

```bash
# 使用 pnpm（推荐）
pnpm install

# 或使用 npm
npm install

# 或使用 yarn
yarn install
```

### 3. 项目配置

#### 3.1 主配置文件 (`docs\.vitepress\config.js`)

根据需要修改配置

#### 3.2 导航条配置文件 (`docs\.vitepress\nav\index.js`)

根据需要修改配置

#### 3.3 首页配置文件 (`docs/index.md`)

根据需要修改配置

## 自定义主题配置

### 主题入口 (`docs/.vitepress/theme/index.js`)

根据需要修改配置

### 默认样式 (`docs/.vitepress/theme/styles/custom.scss`)

已经配置好

## 自定义插件

### 本地搜索插件 (`docs/.vitepress/plugins/localSearchPlugin.js`)

已经配置好

## 自定义组件

### 返回顶部组件 (`docs/.vitepress/theme/components/BackToTop.vue`)

已经配置好


## GitHub Actions 部署 (`/.github/workflows/deploy.yml`)

项目已经配置好相关代码 你只负责按以下操作执行相关配置后推送项目到GitHub后会自动触发cloudflare部署。

先去https://dash.cloudflare.com 注册个账号！如果打不开多刷新几次，别急！登录以后最好吧域名的DNS更改为cloudflare.com的，这样你不用去解析，自动解析。
弄好以后点击右上角的个人配置文件，点击新建api令牌，按照以下配置选择！

![Image](/demo/8.png)
成功后记得保存api令牌密钥，记录下以下位置的账户ID,
![Image](/demo/9.png)
接下来新建你的git仓库。点击右上角用户名选择Repositories选择new输入项目名称
![Image](/demo/1.png)
然后点击Create repository到这步即可
![Image](/demo/2.png)
完成后点击仓库设置，
添加两个密钥 

名称1 CLOUDFLARE_ACCOUNT_ID为workers-and-pages的ID

名称2 CLOUDFLARE_API_TOKEN为右上角新建的api令牌密钥。
![Image](/demo/7.png)

## 配置cloudflare页面

完成后点击cloudflare页面的workers-and-pages页面 点击创建按钮，

![Image](/demo/6.png)

添加构建配置为以下文本

![Image](/demo/5.png)


```bash
pnpm run docs:build
```

```bash
./docs/.vitepress/dist
```

## 推送代码到你的仓库配置

### GitHub仓库推送代码配置指南

### 1.1 安装 Git
```bash
# Windows: 下载 Git for Windows
# 使用以下国内地址的软件进行下载 项目内有其它软件，需要您可以随意享用。

https://cnb.cool/docs.win/win/-/git/raw/master/Git-2.52.0-64-bit.exe?download=true

# 验证安装
git --version
# 或者使用
git -v
```

### 1.2 配置用户信息
```bash
# 设置全局用户名和邮箱
git config --global user.name "你的github用户名"
git config --global user.email "你的邮箱@example.com"

# 检查配置
git config --list
```

## 二、SSH 密钥配置（推荐）

### 2.1 生成 SSH 密钥
```bash
# 生成新的 SSH 密钥（使用你的邮箱）
ssh-keygen -t ed25519 -C "your_email@example.com"
# 或使用 RSA 2选1即可！
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

# 一路回车使用默认设置
# 密钥将生成在：
# Windows: C:\Users\用户名\.ssh\id_ed25519
# macOS/Linux: ~/.ssh/id_ed25519
```

### 2.3 添加公钥到 GitHub
1. 复制公钥内容：
   ```bash
   cat ~/.ssh/id_ed25519.pub
   示例内容：ssh-ed25519 AAAAC3NzaC1lZDAi7FoQ4v3M4yFzEN+6jBDNwWc4 您的邮箱
   复制以下部分
   ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIJl1234abcd5678efgh9012ijklmnopqrstuv your_email@example.com
   ```

2. 登录 GitHub → Settings → SSH and GPG keys → New SSH key
3. 粘贴公钥，设置标题，点击 "Add SSH key"

### 2.4 测试 SSH 连接
```bash
ssh -T git@github.com
# 成功会显示：Hi username! You've successfully authenticated...
```

## 三、HTTPS 方式配置（备选）

### 3.1 使用个人访问令牌（Token）
1. 登录 GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. 点击 "Generate new token"
3. 设置权限（至少勾选 repo）
4. 生成后复制令牌

### 3.2 配置 Git 使用令牌
```bash
# 设置 Git 记住凭据
git config --global credential.helper store

# 或在每次推送时输入用户名和令牌（令牌作为密码）
```

## 四、仓库初始化与配置

### 4.1 初始化新仓库
```bash
# 创建项目目录
使用vscode打开你的项目文件夹依次输入以下命令

# 初始化 Git 仓库
git init

```

### 4.2 连接远程仓库
```bash
# 添加远程仓库（SSH方式）
git remote add origin git@github.com:username/repo.git


# 验证远程仓库
git remote -v
```

### 4.3 首次推送
```bash
# 添加所有文件
git add .

# 提交初始版本
git commit -m "Initial commit"

# 推送代码到远程仓库
git push -u origin master  # 或 main

# -u 参数设置上游分支，后续可直接使用 git push
```
## cloudflare 配置
::: danger 警告
请先将项目推送到仓库后在cloudflare的Workers 和 Pages页面新建项目。参考以下图片！
:::

![Image](/demo/3.png)

![Image](/demo/4.png)
然后在cloudflare登入你的GitHub账号选择你的仓库再执行[这个步骤](#配置cloudflare页面)
## 开发工作流程

### 1. 本地开发

```bash
# 启动开发服务器
pnpm run docs:dev

# 访问 http://localhost:5173
```

### 2. 创建新文档

```bash
# 创建新的指南文档
touch docs/docs/guide/new-feature.md

# 创建新的API文档
touch docs/docs/api/new-api.md
```

### 3. 添加文档到导航

编辑 `docs/.vitepress/nav/index.js`：

```javascript
export default [
  // ...现有导航
  { 
    text: '新功能', 
    link: '/guide/new-feature' 
  }
]
```

### 4. 构建和预览

```bash
# 构建生产版本
pnpm run docs:build

# 预览构建结果
pnpm run docs:preview

# 或直接serve
pnpm run docs:serve
```
## Sitemap地图生成

可在项目部署后使用在线网站生成！然后放置在项目的public根目录重新推送即可！

```bash
https://www.web-site-map.com/xml_sitemap.php
```