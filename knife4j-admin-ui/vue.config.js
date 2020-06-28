module.exports = {
  publicPath: ".",
  assetsDir: "web",
  outputDir: "dist",
  lintOnSave: false,
  productionSourceMap: false,
  indexPath: "index.html",
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    proxy: {
      "/": {
        /* target: "http://localhost:19011/",  */
        target: "http://cloud.xiaominfo.com/", 
        ws: true,
        changeOrigin: true
      }
    }
  }
};
