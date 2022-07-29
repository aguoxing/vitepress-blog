---
title: vitepress-1.0.0-alpha.4搭建博客
description: 自定义主题、集成Gitalk评论、自动部署、Github Pages
date: 2022-07-24
category: 建站
tags:
  - vitepress
---

官方文档：https://vitepress.vuejs.org/

## 前言

其实官方文档已经够详细了...

## 开始
1. 创建项目，新建`vitepress-blog-template`文件夹，进入文件夹执行初始化命令

```sh
yarn init
```

2. 安装vitepress和vue的依赖

```sh
yarn add --dev vitepress vue
```

3. `package.json`添加启动脚本

```json
{
  ...
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
  },
  ...
}
```

4. 项目结构

```
.
├─ docs
│  ├─ .vitepress
│  └─ index.md
└─ package.json

```


## 配置

配置

## 部署

deploy
https://github.com/xxx/vitepress-blog/settings/secrets/actions
New Repository Secret 

## 参考

- https://github.com/clark-cui/vitepress-blog-zaun
- https://github.com/airene/vitepress-blog-pure
- https://zhuanlan.zhihu.com/p/363948019
