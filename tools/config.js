// https://cli.vuejs.org/zh/config/#baseurl
'use strict'

const path = require('path')
const alias = require('./alias.js')

const resolve = dir => {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  indexPath: 'index.html',
  filenameHashing: true,
  lintOnSave: true,
  runtimeCompiler: true,
  productionSourceMap: false,

  configureWebpack: {
    optimization: {
      splitChunks: {
        cacheGroups: {
          theme: {
            name: 'chunk-theme',
            test: /[\\/]node_modules\/element-ui[\\/]/,
            chunks: 'all',
            priority: 10,
            reuseExistingChunk: true,
            enforce: true
          },
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 1,
            chunks: 'initial' // 只打包初始时依赖的第三方
          }
        }
      }
    },
    devtool: 'source-map',
    resolve: {
      alias: alias,
      extensions: ['.vue', '.ts', '.js', '.css', '.scss', '.styl', '.scss']
    },
    module: {
      rules: [
        {
          test: /\.styl$/,
          exclude: /node_modules/,
          use: ['style', 'css', 'stylus']
        }
      ]
    },
    plugins: []
  },
  css: {

    // css 模块
    requireModuleExtension: true,

    // 提取 css
    extract: true
  },
  chainWebpack: config => {
    // inside support svg so clear that then support custom self
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        include: [resolve('src/icons')],
        symbolId: 'icon-[name]'
      })

  },
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:8868',
        changeOrigin: true,
        ws: false
      }
    }
  },

  pluginOptions: {
    i18n: {
      locale: 'zh-CN',
      fallbackLocale: 'zh-CN',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
