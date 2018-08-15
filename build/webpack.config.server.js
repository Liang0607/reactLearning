/*相比webpack.config.js，我们加上了target和output中的libraryTarget*/
const path = require('path');	// 引入‘path’，为了在这里使用绝对路径，避免相对路径在不同系统时出现不必要的问题

module.exports = {
	target: 'node',	//webpack打包出来的内容使用在什么情况下
	//应用入口
	entry: {
		app: path.join(__dirname, '../src/server-entry.js')	//app.js作为打包的入口
	},
	//输出目录
	output: {
		filename: 'server-entry.js',	//name作为entry对应的名字；hash代表整个app打包完成后根据内容加上hash。一旦整个文件内容变更，hash就会变化
		path: path.join(__dirname, '../dist'),	//打包好之后的输出路径
		//publicPath: '/public'	//静态资源文件引用时的路径（加载应用静态资源前面的）
		//publicPath: '/dist',
		libraryTarget: 'commonjs2'	//打包出来js模块所使用的方案（umd/amd/cmd/commonJS），这里我们使用commonjs2，适用于node端
	},
	module: {
		rules: [
			{
				test: /.(jsx)$/,
				loader: 'babel-loader'
			},
			{
				test: /.(js)$/,
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