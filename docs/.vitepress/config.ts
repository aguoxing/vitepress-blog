import { getPosts, getPostLength } from './utils/page'

async function config() {
  return {
    title: 'imgx.cc',
    description: 'Just playing around.',
    base: '/vitepress-blog/',
    themeConfig: {
      posts: await getPosts(),
      pageSize: 5, //几个为一页
      postLength: await getPostLength(), //博客有几篇
      logo: './public/logo.svg',
      siteTitle: 'imgx.cc',
      outlineTitle: '大纲',
      repo: '',
      nav: [
        { text: '首页', link: '/' },
        { text: '归档', link: '/pages/archives' },
        { text: '标签', link: '/pages/tags' },
        { text: '关于', link: '/pages/about' }
      ],
      lastUpdated: true,
      lastUpdatedText: 'Updated Date',
      /*socialLinks: [
          { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
          { icon: 'twitter', link: '...' },
          // You can also add custom icons by passing SVG as string:
          {
              icon: {
                  svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
              },
              link: '...'
          }
      ],
      editLink: {
          pattern: 'https://github.com/aguoxing/vitepress-blog/edit/master/docs/:path',
          text: 'Edit this page on GitHub'
      },*/
      docFooter: {
        prev: 'Pagina prior',
        next: 'Proxima pagina'
      },
      footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2022-present gx'
      }
    },
    srcExclude: ['README.md'], // exclude the README.md , needn't to compiler
    markdown: {
      theme: 'material-palenight',
      lineNumbers: true
    }
  }
}

export default config()
