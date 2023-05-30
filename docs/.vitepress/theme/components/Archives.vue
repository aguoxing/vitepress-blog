<template>
  <div class="main-container" style="padding-top: 10px">
    <div v-for="(yearList, index) in archives" :key="index">
      <div class="year" v-text="yearList[0].frontMatter.date.split('-')[0] + '&nbsp;•&nbsp;' + yearList.length"></div>
      <div class="archive-article-list-wrapper" v-for="(item, index) in yearList" :key="index">
        <div class="archive-article-info-title archive-article-info-title-width">
          <a :href="withBase(item.regularPath)" v-text="item.frontMatter.title"></a>
        </div>
        <div class="article-info">
          <div class="article-info-item">
            <img src="/date.svg" />
            <div class="article-info-date" v-text="item.frontMatter.date"></div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
import { useData, withBase } from 'vitepress'
import { ref, computed } from 'vue'
import { useYearSort } from '../utils/blog'
import { Post, PostMap } from '../types/blog'

const { theme } = useData()
const archives = computed<PostMap>(() => useYearSort(theme.value.posts))

</script>
