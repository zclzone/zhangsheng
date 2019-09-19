// const routerBase =
//   process.env.DEPLOY_ENV === 'GH_PAGES'
//     ? {
//         router: {
//           base: '/zhangsheng/'
//         }
//       }
//     : {};
// const axios = require('axios');

module.exports = {
  mode: 'universal',
  router: {
    base: process.env.NODE_ENV === 'development' ? '' : '/zhangsheng/'
  },
  // generate: {
  //   routes: function() {
  //     return axios.get('/data/articles.json').then(res => {
  //       return res.data.articles.map(article => {
  //         return '/article/' + article._id;
  //       });
  //     });
  //   }
  // },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: `${
          process.env.NODE_ENV === 'development' ? '' : '/zhangsheng'
        }/favicon.ico`
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#7d4721' },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/scss/reset.scss',
    '@/assets/icon/myIcon/iconfont.css',
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/scss/main.scss',
    'github-markdown-css/github-markdown.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/filter',
    '@/plugins/md-export',
    {
      src: '@/plugins/mavon-editor',
      ssr: false
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000'
        : 'https://zclzone.com/zhangsheng'
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
