export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'dev-job-github',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [

  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    '@nuxtjs/proxy',
    '@nuxtjs/axios'
  ],

  // axios: {
  //   credentials: false,
  //   proxy: true
  // },
  // proxy: {
  //   '/api': {
  //     target: 'https://jobs.github.com/',
  //     pathRewrite: {
  //       '^/api' : '/'
  //       },
  //     changeOrigin: true,
  //     "secure": false
  //     }
  // },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
