---
page: true
date: 2021-06-30
title: home
sidebar: false
---
<script setup>
import { useData } from "vitepress";
const { theme } = useData();
const pageSize = theme.value.pageSize;
const posts = theme.value.posts.slice(0,5)
</script>
<Page :posts="posts" :pageCurrent="1" :pagesNum="2" />