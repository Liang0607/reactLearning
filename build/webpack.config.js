const path = require('path');	// ���롮path����Ϊ��������ʹ�þ���·�����������·���ڲ�ͬϵͳʱ���ֲ���Ҫ������
//const CleanWebpackPlugin = require('clean-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');

const config = {
	//Ӧ�����
	entry: {
		app: path.join(__dirname, '../src/app.js')	//app.js��Ϊ��������
	},
	//���Ŀ¼
	output: {
		filename: '[name].[hash].js',	//name��Ϊentry��Ӧ�����֣�hash��������app�����ɺ�������ݼ���hash��һ�������ļ����ݱ����hash�ͻ�仯
		path: path.join(__dirname, '../dist'),	//�����֮������·��
		//publicPath: '/public'	//��̬��Դ�ļ�����ʱ��·��������Ӧ�þ�̬��Դǰ��ģ�
		//publicPath: '/dist'
	},
	plugins: [
	    //new CleanWebpackPlugin([__dirname + '../dist/']),
		new HTMLPlugin({
			template: path.join(__dirname, '../src/template.html')	//��template.html��Ϊģ���ļ�����html
		})	//����һ��htmlҳ�棬ͬʱ��webpack�����ʱ�򣬰����ɵ�entry��ע�����htmlҳ���У�·���Ǹ�������output�����ߵ�
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
					path.join(__dirname, '../node_modules')	//����node_modules���Ǳ�������ļ������ﲻ��babelȥ���������js�ļ�
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
		host: '0.0.0.0',	//����ʹ��127.0.0.1��localhost������IP����
		port: '8887',
		contentBase: path.join(__dirname, '../dist'),	//�������趨�Ļ���Ĭ������webpack.config.js���ڵ�Ŀ¼��
		//hot: true,	//�����ȼ���
		overlay: {	//�������ѵ���С�ڲ�
			errors: true	//ֻ��ʾerror
		},
		//��output���ö�Ӧ
		//publicPath: '/dist',	//�������о�̬·����Ҫǰ���/public���ܷ������ɵľ�̬�ļ�
		historyApiFallback: {
			index: './404.html'	//����404����Ȧ�շ��ʸ������µ�url
		}
	}
}

module.exports = config;