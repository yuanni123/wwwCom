module.exports = {
  publicPath: './',  // 使用相对路径
  productionSourceMap: false,
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,
  devServer: {
    port: 8080,
    open: true,
    client: {
      overlay: {
        warnings: false,
        errors: true
      }
    }
  }
}