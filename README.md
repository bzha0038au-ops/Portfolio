# Bill Portfolio

个人作品集网站源码，基于 React 构建。

在线地址：[https://Bill.bzha0038.com](https://Bill.bzha0038.com)

## 项目简介

这个仓库是我的个人主页，主要用于展示：

- 个人介绍
- 技术栈与背景
- 项目经历
- 联系方式

## 页面结构

当前路由如下：

- `/`：主页
- `/about`：关于我
- `/project`：项目展示
- `/email`：联系页面

## 技术栈

- React 17
- React Router 6
- React Bootstrap + Bootstrap 5
- CSS3
- React Icons
- Axios

## 本地运行

环境要求：

- Node.js
- npm

安装依赖：

```bash
npm install
```

启动开发环境：

```bash
npm start
```

默认访问：`http://localhost:3000`

## 构建生产版本

```bash
npm run build
```

构建产物位于 `build/` 目录。

## 可定制位置

你可以优先从这些文件开始修改：

- `src/components/Home/`：首页内容
- `src/components/About/`：关于页内容
- `src/components/Projects/`：项目卡片与项目列表
- `src/components/Email/Email.js`：联系页
- `src/components/Navbar.js`：导航栏
- `src/components/Footer.js`：页脚
- `src/style.css`：全局样式

## 常用脚本

```bash
npm start    # 本地开发
npm test     # 测试
npm run build # 生产构建
```

## 致谢

向 [Soumyajit4419 Portfolio](https://github.com/soumyajit4419/Portfolio) 致敬。
