<template>
  <Layout>
    <!-- https://vitepress.dev/zh/guide/extending-default-theme#layout-slots -->
    <template #home-features-after>
      <Home v-if="isHome" />
    </template>
    <template #doc-after>
      <Comment v-if="isDetail" />
    </template>
  </Layout>
</template>
<script setup>
import { useData } from 'vitepress'
import { computed } from 'vue'
import DefaultTheme from 'vitepress/theme'
import Home from './Home.vue'
import Comment from './Comment.vue'
const { Layout } = DefaultTheme

const isHome = computed(() => {
  return useData().page.value.relativePath.indexOf('index.md') > -1
})
const isDetail = computed(() => {
  return useData().page.value.relativePath.indexOf('posts') > -1
})
</script>
