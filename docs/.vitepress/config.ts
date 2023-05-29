import { getPosts, getPostLength } from './theme/utils/page'

async function config() {
  return {
    title: 'imgx.cc个人博客',
    description: '由Vitepress+GitHub Pages构建 | imgx.cc个人博客 |记录和分享个人碎片化、结构化、体系化的知识内容',
    base: '/',
    head: [
      ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
      // ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
      // 禁止页面缩放
      [
        'meta',
        {
          name: 'viewport',
          content:
              'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no'
        }
      ],
      // <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      // ['meta', { property: 'Content-Security-Policy', content: 'upgrade-insecure-requests' }],
      //['meta', { name: 'description', content: '由Vitepress+GitHub Pages构建，imgx.cc个人博客，记录和分享个人碎片化、结构化、体系化的知识内容' }],
      ['meta', { name: 'author', content: 'imgx.cc' }],
      ['meta', { property: 'og:title', content: 'imgx.cc个人博客' }]
    ],
    lastUpdated: true,
    themeConfig: {
      posts: await getPosts(),
      pageSize: 10,
      postLength: await getPostLength(),
      logo: '/logo.svg',
      siteTitle: 'imgx.cc',
      outlineTitle: '大纲',
      repo: '',
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Category', link: '/pages/category' },
        // { text: 'Tags', link: '/pages/tags' },
        { text: 'Archive', link: '/pages/archives' },
        { text: 'About', link: '/pages/about' }
      ],
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
        prev: '上一篇',
        next: '下一篇'
      },
      footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2022-present imgx.cc'
      }
    },
    locales: {
      root: { label: '简体中文' },
      zh: { label: 'English', link: 'https://cn.vitejs.dev' },
    },
    srcExclude: ['README.md'], // exclude the README.md , needn't to compiler
    markdown: {
      lineNumbers: true
    }
  }
}

export default config()
