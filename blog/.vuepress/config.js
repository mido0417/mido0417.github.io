module.exports = {
  title: 'Hello, Mido',
  description: 'A blog powered by VuePress',
  theme: '@vuepress/theme-blog', // OR shortcut: @vuepress/blog
  head:[
    ['link', { rel: "shortcut icon", type: "image/x-icon", href: "/favicon.ico" }],
  ],
  plugins:[
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-112751191-1' // UA-00000000-0
      }
    ],
  ],
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#dateformat
     */

    // dateFormat: 'YYYY-MM-DD',

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#nav
     */

    nav: [
      {
        text: 'Blog',
        link: '/tag/blog/',
      },
      {
        text: 'Drupal',
        link: '/tag/drupal/',
      },
      {
        text: 'Tags',
        link: '/tag/',
      },
    ],

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#footer
     */
    footer: {
      contact: [
        {
          type: "github",
          link: "https://github.com/mido0417"
        },
        {
          type: "mail",
          link: "mailto:midorin6497@gmail.com"
        }
      ],
      copyright: [
        {
          text: "Mido lin © 2020",
          link: ""
        }
      ]
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#directories
     */

    directories:[
      {
        id: 'Blog',
        dirname: '_posts',
        path: '/',
        itemPermalink: '/:year/:month/:day/:slug',
      },
      {
        id: 'writing',
        dirname: '_writings',
        path: '/',
        itemPermalink: '/:year/:month/:day/:slug',
      },
    ],

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#frontmatters
     */

    // frontmatters: [
    //   {
    //     id: "tag",
    //     keys: ['tags'],
    //     path: '/tag/',
    //   },
    //   {
    //     id: "location",
    //     keys: ['location'],
    //     path: '/location/',
    //   },
    // ],

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#globalpagination
     */

    // globalPagination: {
    //   lengthPerPage: 10,
    // },

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#sitemap
     */

    // sitemap: {
    //   hostname: 'https://example.vuepress-theme-blog.ulivz.com/'
    // },

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#comment
     */

    // comment: {
    //   service: 'disqus',
    //   shortname: 'vuepress-plugin-blog',
    // },

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#newsletter
     */

    // newsletter: {
    //   endpoint: 'https://billyyyyy3320.us4.list-manage.com/subscribe/post?u=4905113ee00d8210c2004e038&amp;id=bd18d40138'
    // },

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#feed
     */

    // feed: {
    //   canonical_base: 'https://example.vuepress-theme-blog.ulivz.com/',
    // },

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#summary
     */

    // summary:false,

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#summarylength
     */

    // summaryLength:100,

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#pwa
     */

    // pwa:true,

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#paginationcomponent
     */

    // paginationComponent: 'SimplePagination'

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#smoothscroll
     */

    smoothScroll: true
  },
}
