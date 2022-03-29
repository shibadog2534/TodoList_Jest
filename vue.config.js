const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
module.exports = defineConfig({
  outputDir: 'docs',
  assetsDir: './',
  publicPath: './'
})
