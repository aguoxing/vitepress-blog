<template>
  <div class="main-container" style="padding-top: 10px">
    <div v-for="(yearList, index) in data" :key="index">
      <div class="year" v-text=" yearList[0].frontMatter.date.split('-')[0] + '&nbsp;•&nbsp;' + yearList.length"></div>
      <a
        :href="withBase(article.regularPath)"
        v-for="(article, index) in yearList"
        :key="index"
        class="article"
      >
        <div class="date">
          <div class="title-o"></div>
          {{ article.frontMatter.date.slice(5) }}
        </div>
        <div class="title">
          {{ article.frontMatter.title }}
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useData, withBase } from 'vitepress'
import { computed } from 'vue'
import { useYearSort } from '../../utils/blog'

const { theme } = useData()
const data = computed(() => useYearSort(theme.value.posts))
</script>

<style scoped>
.year {
  padding: 16px 0 8px 0;
  font-size: 1.2rem;
  font-weight: 600;
}
</style>
