const path = require('path');
module.exports = {
  /** 区分打包环境与开发环境
   * process.env.NODE_ENV==='production'  (打包环境)
   * process.env.NODE_ENV==='development' (开发环境)
   */
  // 项目部署的基础路径
  // 我们默认假设你的应用将会部署在域名的根部,
  // 例如 https://www.my-app.com/
  // 如果你的应用部署在一个子路径下，那么你需要在这里
  // 指定子路径。比如将你的应用部署在
  // https://www.foobar.com/my-app/
  // 那么将这个值改为 '/my-app/'
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
  //生成的生产环境构建文件的目录
  outputDir: "dist",
  //是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。
  lintOnSave: true,
  //是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
  runtimeCompiler: false,
  // babel-loader默认会跳过`node_modules`依赖. // 通过这个选项可以显示转译一个依赖
	transpileDependencies: [
		/* string or regex */
	],
  // 是否为生产环境构建生成sourceMap?
  productionSourceMap: false,
  //调整内部的webpack配置
	chainWebpack: config => {
		config.resolve.alias
		.set('@', path.join(__dirname,'src')) 
    .set('_c', path.join(__dirname,'src/components'))
    config.plugin('html').tap(args => {
      args[0].title = 'VUE'
      return args
    })
  },
	configureWebpack: config => {
    // config['externals'] = {
    //   'BMap': 'BMap'
    // }
  },
	// CSS 相关选项
	css: {
		extract: process.env.NODE_ENV === 'production'? true : false, // 将组件内部的css提取到一个单独的css文件（只用在生产环境）
		sourceMap: false, // 允许生成 CSS source maps?
		loaderOptions: {
      //css: {
        //这里的选项会传递给 css-loader
      //},
      sass: {
        //这里的选项会传递给 sass-loader
        prependData: `@import "@/styles/main.scss";`
      },
      postcss: {
        //这里的选项会传递给 postcss-loader
        plugins: [
          require('postcss-px-to-viewport') ({
            viewportWidth: 1920,
            viewportHeight: 1080,
            viewportUnit: 'vw',
            unitPrecision: 3,
            minPixelValue: 1
          })
        ]
      }
		}
	},
  //是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建
	parallel: require("os").cpus().length > 1,
  // 向 PWA 插件传递选项。
  pwa: {},
  //本地服务
	devServer: {
		open: process.platform === "darwin",
		disableHostCheck: false,
		host: "these.local",
		port: 1234,
		https: false,
		hot:true,
		hotOnly: true,
		// proxy: {
		// 	'/api': {
    //     target: '',
    //     ws: true,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api' : ''
    //     }
    //   }
    // }
	}, 
  // 第三方插件配置
	pluginOptions: {
		
	}
};