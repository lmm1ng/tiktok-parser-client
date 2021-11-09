module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    host: 'localhost',
    port: 8080,
    historyApiFallback: true,
    inline: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        // pathRewrite: { '^/api': '' },
        secure: false,
        changeOrigin: true
      }
    },
    disableHostCheck: true,
    clientLogLevel: 'warning'
    // hot: process.env.NODE_ENV === 'development',
  }
}
