export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  server: {
    port: 3001,
    host: 'localhost',
    timing: false
  },

  render: {
    // injectScripts: false,
    resourceHints: false,
    static: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '武汉仪工电气设备有限公司',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'Keywords',
        name: 'Keywords',
        content: '武汉仪工，武汉仪工电气，仪工电气，武汉电力，武汉仪工电气设备有限公司 网址：https://www.whelectric.com.cn'
      },
      {
        hid: 'description',
        name: 'description',
        content: '武汉仪工电气设备有限公司(网址：https://www.whelectric.com.cn)是一家专门为电力系统用户提供全套在线监测解决方案以及运维检修技术服务的股份制科技企业。所提供的产品和服务已经覆盖发电、输电、变电、配电等领域，并逐步发展成为，以智能在线监测系统集成、电气设备运维检修技术服务为主体，以自主品牌产品研发和生产为发展创新的高新技术企业。'
      },
      {name: 'format-detection', content: 'telephone=no'},
      {name: 'baidu-site-verification', content: 'codeva-8kPnZmBWPZ'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ],
    script: [
      {src: 'https://hm.baidu.com/hm.js?b80757f409a5f19123ba92b256ab5dcf'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/style/style.css',
    '@/assets/style/lrtk.css',
    '@/assets/style/MagicZoom.css',
    '@/assets/style/swiper.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '@assets/script/jquery.min', ssr: false},
    {src: '@assets/script/swiper.min', ssr: false},
    {src: '~/plugins/baidu', ssr: false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/sitemap'
  ],

  // Define the dist directory for your Nuxt application
  generate: {
    dir: 'docs'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    cssSourceMap: false,
    filenames: {
      app: ({isDev}) => isDev ? '[name].js' : '[name].js',
      chunk: ({isDev}) => isDev ? '[name].js' : '[name].js',
      css: ({isDev}) => isDev ? '[name].css' : '[name].css',
      json: ({isDev}) => isDev ? '[name].json' : '[name].json',
      img: ({isDev}) => isDev ? '[path][name].[ext]' : 'img/[name].[ext]',
      font: ({isDev}) => isDev ? '[path][name].[ext]' : 'fonts/[name].[ext]',
      video: ({isDev}) => isDev ? '[path][name].[ext]' : 'videos/[name].[ext]'
    },
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://www.whygdq.com',
    generate: false,// 允许使用nuxt generate生成
    cacheTime: 1000 * 60 * 60 * 24, //1天更新频率，只在generate: false有用
    gzip: true, // 生成.xml.gz压缩的sitemap
    defaults: {
      changefreq: 'always',
      lastmod: new Date()
    },
    exclude: [
      '/404',
    ]
  }
}
