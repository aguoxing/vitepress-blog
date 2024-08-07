import DefaultTheme from 'vitepress/theme'

import BlogLayout from './components/BlogLayout.vue'
import Archives from './components/Archives.vue'
import Tags from './components/Tags.vue'
import Category from './components/Category.vue'

import './styles/blog.css'
import './styles/layout.css'

export default {
  extends: DefaultTheme,
  Layout: BlogLayout,
  enhanceApp({ app }) {
    // register global component
    app.component('Tags', Tags)
    app.component('Category', Category)
    app.component('Archives', Archives)
  }
}
