import { getPosts, getPostLength } from './utils/page'

async function config() {
  return {
    title: 'imgx.cc',
    description: 'imgx.cc',
    base: '/',
    head: [
      // ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
      // 禁止页面缩放
      ['meta',{name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no'}],
      ['meta', {name: 'author', content: 'imgx.cc'}],
      ['meta',{property: 'og:title',content: 'Home'}]
    ],
    themeConfig: {
      posts: await getPosts(),
      pageSize: 5,
      postLength: await getPostLength(),
      logo: '/logo.svg',
      siteTitle: 'imgx.cc',
      outlineTitle: '大纲',
      repo: '',
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Archives', link: '/pages/archives' },
        { text: 'Tags', link: '/pages/tags' },
        { text: 'About', link: '/pages/about' }
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
        copyright: 'Copyright © 2022-present imgx.cc'
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
