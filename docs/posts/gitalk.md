---
title: vitepress+gitalk
description: Gitalk、Github Pages
date: 2023-01-09
category: website
tags:
  - vitepress
  - gitalk
---



# Use Gitalk in Vitepress

1. [Register a new OAuth application](https://github.com/settings/applications/new)

- Application name

  xxx

- Homepage URL

  your website address, like `https://imgx.cc`

- Authorization callback URL

  your website address, like `https://imgx.cc`

2. Remember your `Client ID` and `Client secrets`

```vue
<template>
  <div id="gitalk-container"></div>
</template>
<script lang="ts" setup>
// import 'gitalk/dist/gitalk.css'
import '../styles/gitalk.css'
import Gitalk from 'gitalk'
import md5 from 'blueimp-md5'
import { onMounted } from 'vue'
// import { useData } from "vitepress";
// const relativePath = useData().page.value.relativePath;
const gitalk = new Gitalk({
  clientID: 'xxx', //  Client ID
  clientSecret: 'xxx', // Client secrets
  repo: 'xxx', // repo name
  owner: 'xx',
  admin: ['xx'],
  id: md5(location.pathname), // Ensure uniqueness and length less than 50
  language: 'zh-CN',
  distractionFreeMode: true // Facebook-like distraction free mode
})
onMounted(() => {
  gitalk.render('gitalk-container')
})
</script>
<style scoped></style>
```



