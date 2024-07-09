import { getPosts, getPostLength } from './theme/utils/page'

async function config() {
  return {
    title: "imgx.cc个人博客",
    description:
      "由Vitepress+GitHub Pages构建 | imgx.cc个人博客 |记录和分享个人碎片化、结构化、体系化的知识内容",
    base: "/",
    head: [
      ["link", { rel: "icon", type: "image/png", href: "/logo.png" }],
      // ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
      // 禁止页面缩放
      [
        "meta",
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no",
        },
      ],
      // <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      // ['meta', { property: 'Content-Security-Policy', content: 'upgrade-insecure-requests' }],
      //['meta', { name: 'description', content: '由Vitepress+GitHub Pages构建，imgx.cc个人博客，记录和分享个人碎片化、结构化、体系化的知识内容' }],
      ["meta", { name: "author", content: "imgx.cc" }],
      ["meta", { property: "og:title", content: "imgx.cc个人博客" }],
    ],
    lastUpdated: true,
    themeConfig: {
      posts: await getPosts(),
      pageSize: 10,
      postLength: await getPostLength(),
      logo: "/logo.svg",
      siteTitle: "imgx.cc",
      outlineTitle: "目录",
      repo: "",
      nav: [
        { text: "首页", link: "/" },
        { text: "分类", link: "/pages/category" },
        // { text: 'Tags', link: '/pages/tags' },
        { text: "归档", link: "/pages/archives" },
        { text: "关于", link: "/pages/about" },
      ],
      lastUpdatedText: "最后更新于",
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
      search: {
        provider: "local",
      },
      docFooter: {
        prev: "上一篇",
        next: "下一篇",
      },
      footer: {
        // message: "Released under the MIT License.",
        copyright: "Copyright © 2022-present imgx.cc",
      },
    },
    locales: {
      root: { label: "简体中文" },
      zh: { label: "English", link: "https://vitepress.dev" },
    },
    srcExclude: ["README.md"], // exclude the README.md , needn't to compiler
    markdown: {
      lineNumbers: true,
      // math: true,
      container: {
        tipLabel: "提示",
        warningLabel: "警告",
        dangerLabel: "危险",
        infoLabel: "信息",
        detailsLabel: "详细信息",
      },
    },
  };
}

export default config()
