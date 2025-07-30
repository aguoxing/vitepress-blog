<template>
  <div class="main-container" style="padding-top: 10px">
    <div class="category-list-wrapper">
      <span @click="toggleCategory(categoryName, 'currentPage')" v-for="(item, categoryName) in postsAll"
        class="category-item" :class="{ 'category-item-checked': selectCategory === categoryName }">
        {{ categoryName }} - {{ postsAll[categoryName].length }}
      </span>
    </div>

    <div class="article-list-wrapper" v-for="(item, index) in posts" :key="index">
      <div class="article-info-title">
        <a :href="withBase(item.regularPath)" v-text="item.frontMatter.title"></a>
      </div>
      <div class="article-info-desc" v-text="item.frontMatter.description"></div>

      <div class="article-info">
        <div class="article-info-item">
          <img src="/date.svg" />
          <div class="article-info-date" v-text="item.frontMatter.date"></div>
        </div>
      </div>
      <div class="horizontal-divider"></div>
    </div>

    <div v-if="pagesNum > 1">
      <div class="pagination">
        <div v-for="(i, index) in pagesNum" :key="index" v-text="i" class="pagination-item"
          :class="{ paginationItemChecked: pageCurrent === i }" @click="go(i)">
        </div>
      </div>
    </div>

  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useData, withBase } from 'vitepress'
import { initCategory } from '../utils/blog'
import { Post, PostMap } from '../types/blog'

const { theme } = useData()

let selectCategory = ref<string>('')
let currentUrl = location.href
let url = currentUrl.split('?')[1]
if (url !== undefined) {
  let params = new URLSearchParams(url)
  if (params.get('category') !== null) {
    selectCategory.value = params.get('category') as string
  }
}

// get posts
let postsAll = ref<PostMap>(theme.value.posts || [])
// filter index post
postsAll = computed(() => initCategory(theme.value.posts))

// pagination
let allMap = {}
// get postLength
let postLength = 0
// set posts
let posts = ref<Post[]>([])
//pageCurrent
let pageCurrent = ref(1)
let pagesNum = 0
// get pageSize
let pageSize = theme.value.pageSize

const toggleCategory = (category: string, from: string) => {
  if (from === 'currentPage') {
    window.history.replaceState(null, '', currentUrl + '?category=' + category)
  }
  selectCategory.value = category
  if (category !== '') {
    postLength = postsAll.value[category].length
  }

  //  pagesNum
  pagesNum = postLength % pageSize === 0 ? postLength / pageSize : postLength / pageSize + 1
  pagesNum = parseInt(pagesNum.toString())

  pageCurrent.value = 1

  for (let i = 0; i < pagesNum; i++) {
    allMap[i] = []
  }
  let index = 0
  for (let i = 0; i < postLength; i++) {
    if (allMap[index].length > pageSize - 1) {
      index += 1
    }
    allMap[index].push(postsAll.value[category][i])
  }
  posts.value = allMap[pageCurrent.value - 1]
}

if (selectCategory.value !== null && selectCategory.value !== '') {
  currentUrl = location.href.split('?')[0]
  toggleCategory(selectCategory.value, 'homePage')
}

const go = (i: number) => {
  pageCurrent.value = i
  posts.value = allMap[pageCurrent.value - 1]
}
</script>
