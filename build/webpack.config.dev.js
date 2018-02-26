const webpack = require('webpack')
const merge = require('webpack-merge')
const DashboardPlugin = require('webpack-dashboard/plugin')
const baseConfig = require('./webpack.config.base')

baseConfig.entry.app.unshift('react-hot-loader/patch')
module.exports = merge(baseConfig, {
  devServer: {
    historyApiFallback: true,
    contentBase: './dist',
    hot: true,
    host: '0.0.0.0',
    port: 9000,
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
    new webpack.HotModuleReplacementPlugin()
    // new Jarvis({
    //   port: 1443 // optional: set a port
    // })
  ]
})
