# 个人介绍页面 - 基于 React、TypeScript 和 Rsbuild

这个项目使用 [React](https://reactjs.org/)、[TypeScript](https://www.typescriptlang.org/) 和 [Rsbuild](https://rsbuild.dev/) 构建。

## 🚀 技术特性

- **React 19.1.1**: 最新的 React 版本
- **TypeScript**: 类型安全的 JavaScript 超集
- **Less**: CSS 预处理器，支持变量、嵌套、混合等
- **Framer Motion**: 专业的动画库
- **Lucide React**: 现代化的图标库
- **React Router**: 单页应用路由管理
- **Rsbuild**: 现代构建工具，支持 TypeScript 和 Less

## 🏗️ 项目结构

```
src/
├── components/           # 可复用组件
│   ├── About/           # About组件文件夹
│   │   ├── index.tsx    # 组件主文件
│   │   └── index.module.less  # 组件样式文件
│   ├── Hero/            # Hero组件文件夹
│   │   ├── index.tsx    # 组件主文件
│   │   └── index.module.less  # 组件样式文件
│   ├── Skills/          # Skills组件文件夹
│   │   ├── index.tsx    # 组件主文件
│   │   └── index.module.less  # 组件样式文件
│   ├── Portfolio/       # Portfolio组件文件夹
│   │   ├── index.tsx    # 组件主文件
│   │   └── index.module.less  # 组件样式文件
│   ├── Experience/      # Experience组件文件夹
│   │   ├── index.tsx    # 组件主文件
│   │   └── index.module.less  # 组件样式文件
│   ├── Interests/       # Interests组件文件夹
│   │   ├── index.tsx    # 组件主文件
│   │   └── index.module.less  # 组件样式文件
│   ├── Footer/          # Footer组件文件夹
│   │   ├── index.tsx    # 组件主文件
│   │   └── index.module.less  # 组件样式文件
│   └── Navbar/          # Navbar组件文件夹
│       ├── index.tsx    # 组件主文件
│       └── index.module.less  # 组件样式文件
├── pages/               # 页面组件
│   └── Home/            # Home页面文件夹
│       └── index.tsx    # 页面主文件
├── App.tsx              # 主应用组件（路由配置）
├── App.css              # 全局样式
├── index.tsx            # 应用入口
└── index.css            # 全局基础样式
```

## 📱 页面内容

### 1. 导航栏 (Navbar)

- 固定顶部导航
- 毛玻璃效果
- 平滑滚动导航

### 2. 英雄区域 (Hero)

- 全屏渐变背景
- 浮动卡片动画
- 行动号召按钮

### 3. 关于我 (About)

- 个人简介
- 统计数据展示
- 社交媒体链接

### 4. 技能展示 (Skills)

- 技术栈分类
- 技能进度条
- 响应式网格布局

### 5. 作品展示 (Portfolio)

- 项目卡片
- 悬停覆盖层
- 技术标签

### 6. 工作经历 (Experience)

- 时间线布局
- 交替显示
- 详细描述

### 7. 个人兴趣 (Interests)

- 兴趣卡片
- 图标展示
- 悬停缩放效果

### 8. 页脚 (Footer)

- 版权信息
- 快速导航链接

## 🛠️ 可用脚本

在项目目录中，您可以运行：

### `npm start`

启动开发服务器，在 [http://localhost:3000](http://localhost:3000) 打开。

### `npm run build`

构建生产版本到 `build` 文件夹。

### `npm run preview`

预览构建结果。

## 🔧 开发特性

### TypeScript 支持

- 完整的类型检查
- 智能提示和自动补全
- 编译时错误检测

### Less 预处理器

- 变量和嵌套
- 混合和函数
- 模块化样式管理

### 组件化架构

- 每个组件独立文件夹
- 组件和样式紧密关联
- 易于维护和扩展

### 响应式设计

- 移动优先设计
- 多断点适配
- 触摸友好交互

## 📦 安装依赖

```bash
npm install
```

## 🚀 开始开发

```bash
npm start
```

## 📚 学习资源

- [React 官方文档](https://reactjs.org/docs/getting-started.html)
- [TypeScript 官方文档](https://www.typescriptlang.org/docs/)
- [Less 官方文档](http://lesscss.org/)
- [Framer Motion 文档](https://www.framer.com/motion/)
- [Rsbuild 官方文档](https://rsbuild.dev/)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

**用代码创造美好体验！** ✨
