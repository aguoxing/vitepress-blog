<template>
  <div class="main-container">
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
        <div class="article-info-item">
          <img src="/category.svg" />
          <div class="article-info-category">
            <a :href="withBase(`/pages/category.html?category=${item.frontMatter.category}`)">
              {{ item.frontMatter.category }}
            </a>
          </div>
        </div>
      </div>

      <div class="horizontal-divider"></div>

    </div>
    <div v-if="pagesNum > 1">
      <div class="pagination">
        <div v-for="(i, index) in pagesNum" :key="index" v-text="i" class="pagination-item"
          :class="{ paginationItemChecked: pageCurrent === i }" @click="go(i)"></div>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useData, withBase } from 'vitepress'
import { Post } from '../types/blog'
const { theme } = useData()

// let currentUrl = location.href
// let url = currentUrl.split('?')[1]
// let params = new URLSearchParams(url)
// let currentPageNum = ref(params.get('pageNum') ? params.get('pageNum') : 1)

// get posts
let postsAll = theme.value.posts || []
// get postLength
let postLength = theme.value.postLength
// get pageSize
let pageSize = theme.value.pageSize
//  pagesNum
let pagesNum = postLength % pageSize === 0 ? postLength / pageSize : postLength / pageSize + 1
pagesNum = parseInt(pagesNum.toString())
//pageCurrent
let pageCurrent = ref(1)
// filter index post
postsAll = postsAll.filter((item: Post) => {
  return item.regularPath.indexOf('index') < 0
})
// pagination
let allMap = {}
for (let i = 0; i < pagesNum; i++) {
  allMap[i] = []
}
let index = 0
for (let i = 0; i < postsAll.length; i++) {
  if (allMap[index].length > pageSize - 1) {
    index += 1
  }
  allMap[index].push(postsAll[i])
}
// set posts
let posts = ref<Post[]>([])
posts.value = allMap[pageCurrent.value - 1]

// click pagination
const go = (i: number) => {
  // window.history.replaceState(null, '', currentUrl + '?pageNum=' + i)

  pageCurrent.value = i
  posts.value = allMap[pageCurrent.value - 1]
}

// if (currentPageNum.value !== null && currentPageNum.value !== '') {
  // currentUrl = location.href.split('?')[0]
  // go(currentPageNum.value)
// }

</script>
