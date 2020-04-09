const path = require('path')

module.exports = {
    publicPath: '/', // 基本路径
    outputDir: 'dist', // 输出文件目录
    lintOnSave: false, // eslint-loader 是否在保存的时候检查
    // webpack配置
    chainWebpack: (config) => {
    },
    configureWebpack: (config) => {
      if (process.env.NODE_ENV === 'production') {
        // 为生产环境修改配置...
        config.mode = 'production'
      } else {
        // 为开发环境修改配置...
        config.mode = 'development'
      }
      Object.assign(config, {
        // 开发生产共同配置
        resolve: {
          alias: {
            '@': path.resolve(__dirname, './src'),
            '@c': path.resolve(__dirname, './src/components'),
            '@p': path.resolve(__dirname, './src/pages')
          } // 别名配置
        }
      })
    },
    productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
    parallel: require('os').cpus().length > 1, // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
    devServer: {
      open: true,
      hot: true,
      // host: '127.0.0.1',
      https: false, // 启用https
      proxy:{
        //配置跨域
        '/api': {
          target: 'http://localhost:3000',
          ws: true,
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    },
    // 第三方插件配置
    pluginOptions: {}
};