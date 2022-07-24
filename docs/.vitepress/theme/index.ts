import DefaultTheme from 'vitepress/theme'

import BlogLayout from './components/BlogLayout.vue'
import Archives from './components/Archives.vue'
import Tags from './components/Tags.vue'

import './styles/blog.css'
import './styles/layout.css'

export default {
  ...DefaultTheme,
  Layout: BlogLayout,
  enhanceApp({ app }) {
    // register global component
    app.component('Tags', Tags)
    app.component('Archives', Archives)
  }
}
