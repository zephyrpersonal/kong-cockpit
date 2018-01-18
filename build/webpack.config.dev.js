const webpack = require('webpack')
const merge = require('webpack-merge')
const DashboardPlugin = require('webpack-dashboard/plugin')
const baseConfig = require('./webpack.config.base')
const Jarvis = require('webpack-jarvis')

baseConfig.entry.app.unshift('react-hot-loader/patch')
module.exports = merge(baseConfig, {
  devServer: {
    historyApiFallback: true,
    contentBase: './dist',
    hot: true,
    proxy: {
      '/kong': {
        target: 'http://qccost-gateway-admin.dev.quancheng-ec.com',
        host: 'http://qccost-gateway-admin.dev.quancheng-ec.com',
        pathRewrite: { '^/kong': '' },
        changeOrigin: true
      }
    }
  },
  plugins: [
    new DashboardPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new Jarvis({
      port: 1443 // optional: set a port
    })
  ]
})
