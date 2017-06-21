var path = require('path');
var webpack = require('webpack');
var debug = process.env.NODE_ENV !== "production";
console.log('path is:'+path.resolve(__dirname,'build/'))
module.exports = {
	entry: path.resolve(__dirname,'./src/root.js'),
	output:{
		path: path.resolve(__dirname),
		filename: 'build/build.js'
	},
	module:{
		loaders:[
			{
				test: /\.js[x]?$/,
				exclude: /(node_modules)/,
				loader: ['babel-loader'],
				query: {
					presets:['es2015','react'],
					plugins: ['react-html-attrs'], //添加组件的插件配置
				}
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader!postcss-loader'
			},
			{
				test: /\.scss$/,
				loader: 'style!css!sass!postcss'
			}
		]
	},
	plugins: debug ? [] : [
	    new webpack.optimize.DedupePlugin(),//去重。如果你使用了一些有着很酷的依赖树的库，那么它可能存在一些文件是重复的。webpack可以找到这些文件并去重。这保证了重复的代码不被大包到bundle文件里面去，取而代之的是运行时请求一个封装的函数。
	    new webpack.optimize.OccurenceOrderPlugin(),//为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
	    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),//压缩JS代码
	    new webpack.HotModuleReplacementPlugin(),
	    new webpack.NoErrorsPlugin()
	],
	postcss:[
		require('precss'),
		require('autoprefixer') //调用autoprefixer插件,css3自动补全
	],
	devServer: {
        contentBase: path.resolve(__dirname,"./src"),  //本地服务器所加载的页面所在的目录
        port: 8888,
        colors: true,  //终端中输出结果为彩色
        historyApiFallback: true,  //不跳转
        inline: true  //实时刷新
    },
}