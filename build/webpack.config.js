const path = require('path');	// 引入‘path’，为了在这里使用绝对路径，避免相对路径在不同系统时出现不必要的问题
//const CleanWebpackPlugin = require('clean-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');

const config = {
	//应用入口
	entry: {
		app: path.join(__dirname, '../src/app.js')	//app.js作为打包的入口
	},
	//输出目录
	output: {
		filename: '[name].[hash].js',	//name作为entry对应的名字；hash代表整个app打包完成后根据内容加上hash。一旦整个文件内容变更，hash就会变化
		path: path.join(__dirname, '../dist'),	//打包好之后的输出路径
		//publicPath: '/public'	//静态资源文件引用时的路径（加载应用静态资源前面的）
		//publicPath: '/dist'
	},
	plugins: [
	    //new CleanWebpackPlugin([__dirname + '../dist/']),
		new HTMLPlugin({
			template: path.join(__dirname, '../src/template.html')	//以template.html作为模板文件生成html
		})	//生成一个html页面，同时在webpack编译的时候，把生成的entry都注入这个html页面中，路径是根据我们output配置走的
  	],
	module: {
		rules: [
			{
				test: /\.jsx$/,
				loader: 'babel-loader'
			},
			{
				test: /\.(js)$/,
				loader: 'babel-loader',
				exclude: [
					path.join(__dirname, '../node_modules')	//由于node_modules都是编译过的文件，这里不让babel去处理下面的js文件
				]
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	}
}
const isDev = process.env.NODE_ENV === 'development';
if (isDev) {
	config.devServer = {
		host: '0.0.0.0',	//允许使用127.0.0.1、localhost、本机IP访问
		port: '8887',
		contentBase: path.join(__dirname, '../dist'),	//不进行设定的话，默认是在webpack.config.js所在的目录下
		//hot: true,	//启动热加载
		overlay: {	//错误提醒弹窗小遮层
			errors: true	//只显示error
		},
		//和output配置对应
		//publicPath: '/dist',	//访问所有静态路径都要前面加/public才能访问生成的静态文件
		historyApiFallback: {
			index: './404.html'	//所有404请求圈闭访问该配置下的url
		}
	}
}

module.exports = config;