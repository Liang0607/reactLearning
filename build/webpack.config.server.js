/*���webpack.config.js�����Ǽ�����target��output�е�libraryTarget*/
const path = require('path');	// ���롮path����Ϊ��������ʹ�þ���·�����������·���ڲ�ͬϵͳʱ���ֲ���Ҫ������

module.exports = {
	target: 'node',	//webpack�������������ʹ����ʲô�����
	//Ӧ�����
	entry: {
		app: path.join(__dirname, '../src/server-entry.js')	//app.js��Ϊ��������
	},
	//���Ŀ¼
	output: {
		filename: 'server-entry.js',	//name��Ϊentry��Ӧ�����֣�hash��������app�����ɺ�������ݼ���hash��һ�������ļ����ݱ����hash�ͻ�仯
		path: path.join(__dirname, '../dist'),	//�����֮������·��
		//publicPath: '/public'	//��̬��Դ�ļ�����ʱ��·��������Ӧ�þ�̬��Դǰ��ģ�
		//publicPath: '/dist',
		libraryTarget: 'commonjs2'	//�������jsģ����ʹ�õķ�����umd/amd/cmd/commonJS������������ʹ��commonjs2��������node��
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