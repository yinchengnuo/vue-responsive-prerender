'use strict'
const path = require('path')
const webpack = require('webpack')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
const { title: name, publicPath } = require('./src/settings.js')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const plugins = [
  new webpack.ProvidePlugin({
    Vue: ['vue', 'default'],
    G: [path.resolve(path.join(__dirname, '/src/plugin/prototype/G')), 'default']
  })
]

if (process.env.NODE_ENV !== 'development') {
  plugins.push(new PrerenderSPAPlugin({
    headless: false,
    routes: ['/', publicPath],
    staticDir: path.join(__dirname, './dist'),
    renderer: new Renderer({
      renderAfterDocumentEvent: 'vue-mounted'
    })
  }))
}

module.exports = {
  publicPath,
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: process.env.port || process.env.npm_config_port || 80,
    open: true,
    overlay: {
      errors: true,
      warnings: false
    },
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        changeOrigin: true,
        target: 'http://192.168.99.170:8080/DMHCApi',
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  },
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    plugins
  },
  chainWebpack(config) {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')

    config.plugin('html').tap(args => {
      args[0].title = name
      return args
    })

    config.module.rule('scss').oneOfs.store.forEach(item => {
      item.use('sass-resources-loader').loader('sass-resources-loader').options({
        resources: ['./src/styles/index.scss']
      })
        .end()
    })
  }
}
