# V-Element

一个基于 Vue 3 的现代化组件库，使用 TypeScript 开发，提供丰富的 UI 组件和工具函数。

## ✨ 特性

- 🔥 基于 Vue 3 和 TypeScript 开发
- 📦 开箱即用的高质量组件
- 🎨 可定制的主题和样式
- 📚 详细的文档和示例
- ⚡️ 基于 Vite 构建，开发体验极佳
- 🔧 完整的类型定义支持
- 🧪 使用 Vitest 进行单元测试

## 🚀 技术栈

- Vue 3
- TypeScript
- Vite
- VitePress (文档)
- Vitest (单元测试)
- ESLint (代码规范)
- PostCSS (样式处理)

## 📦 安装

```bash
# 使用 npm
npm install v-element

# 使用 yarn
yarn add v-element

# 使用 pnpm
pnpm add v-element
```

## 🔨 快速开始

1. 安装依赖：

```bash
npm install
```

2. 启动开发服务器：

```bash
npm run dev
```

3. 构建生产版本：

```bash
npm run build
```

## 📚 文档

本项目使用 VitePress 构建文档。

## 🔧 可用的脚本

- `npm run dev` - 启动开发服务器
- `npm run build` - 构建生产版本
- `npm run preview` - 预览生产构建
- `npm run type-check` - 运行类型检查
- `npm run lint` - 运行代码规范检查
- `npm run docs:dev` - 启动文档开发服务器
- `npm run docs:build` - 构建文档
- `npm run docs:preview` - 预览文档

## 📁 项目结构

```
v-element/
├── src/                           # 源代码目录
│   ├── components/               # UI 组件目录
│   │   ├── Button/              # 按钮组件
│   │   ├── Collapse/            # 折叠面板组件
│   │   ├── Common/              # 公共基础组件
│   │   ├── Dropdown/            # 下拉菜单组件
│   │   ├── Icon/                # 图标组件
│   │   ├── icons/               # SVG 图标资源
│   │   ├── Input/               # 输入框组件
│   │   ├── Message/             # 消息提示组件
│   │   ├── Select/              # 选择器组件
│   │   ├── Switch/              # 开关组件
│   │   └── Tooltip/             # 文字提示组件
│   ├── hooks/                   # Vue Composition API Hooks
│   │   ├── useClickOutside.ts   # 点击外部区域 Hook
│   │   ├── useEventListener.ts  # 事件监听 Hook
│   │   └── useZIndex.ts        # z-index 管理 Hook
│   ├── styles/                  # 全局样式文件
│   │   ├── index.css           # 样式入口文件
│   │   ├── reset.css           # CSS 重置和基础样式
│   │   └── vars.css            # CSS 变量定义
│   ├── assets/                  # 静态资源文件
│   ├── App.vue                  # 应用根组件
│   ├── main.ts                  # 应用入口文件
│   └── VNode.tsx               # Virtual DOM 相关工具
├── docs/                        # 文档目录
│   ├── .vitepress/             # VitePress 配置
│   │   ├── config.ts           # VitePress 主配置
│   │   ├── theme/              # 文档主题配置
│   │   └── cache/              # VitePress 缓存
│   ├── components/             # 文档展示组件
│   ├── demo/                   # 示例代码
│   ├── api-examples.md         # API 使用示例
│   ├── index.md                # 文档首页
│   └── markdown-examples.md    # Markdown 使用示例
├── public/                     # 静态资源目录
├── tests/                      # 测试文件目录
├── .vscode/                    # VS Code 配置
├── .eslintrc.cjs              # ESLint 配置
├── .gitignore                 # Git 忽略配置
├── env.d.ts                   # 环境变量类型声明
├── index.html                 # 项目 HTML 模板
├── package.json               # 项目依赖和脚本配置
├── postcss.config.cjs        # PostCSS 配置
├── tsconfig.json             # TypeScript 配置
├── tsconfig.config.json      # TypeScript 构建配置
├── vite.config.ts           # Vite 构建配置
└── vitest.config.ts         # Vitest 测试配置
```

### 核心目录说明

#### 1. 组件目录 (src/components)
每个组件目录通常包含以下文件：
- `index.ts` - 组件导出文件
- `xxx.vue` - 组件主文件
- `xxx.test.ts` - 组件测试文件
- `types.ts` - 组件类型定义
- `style.css` - 组件样式文件

#### 2. Hooks 目录 (src/hooks)
- `useClickOutside.ts` - 处理点击元素外部的逻辑
- `useEventListener.ts` - 统一的事件监听器管理
- `useZIndex.ts` - 组件层级管理

#### 3. 样式目录 (src/styles)
- `index.css` - 样式入口文件，导入所有样式
- `reset.css` - 重置浏览器默认样式
- `vars.css` - 定义全局 CSS 变量，包括主题色、字体等

#### 4. 文档目录 (docs)
- `.vitepress/` - 文档站点配置
- `components/` - 文档专用组件
- `demo/` - 交互式示例代码
- 各类 Markdown 文件 - 组件文档和使用说明

#### 5. 配置文件
- `vite.config.ts` - Vite 构建工具配置
- `tsconfig.json` - TypeScript 编译配置
- `postcss.config.cjs` - CSS 处理器配置
- `vitest.config.ts` - 单元测试配置
- `.eslintrc.cjs` - 代码规范配置

## 🔨 开发

### 环境要求

- Node.js >= 14.0.0
- npm >= 6.0.0

##  联系方式
22xrpeng@stu.edu.cn

