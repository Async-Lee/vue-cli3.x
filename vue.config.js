const vuxLoader = require('vux-loader')

module.exports = {
	configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
    	vuxLoader.merge(config, {
		  plugins: ['vux-ui']
		})
      // 为开发环境修改配置...
    }
  }
}