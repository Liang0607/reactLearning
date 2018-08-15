const express = require('express');
const fs = require('fs');
const ReactSSR = require('react-dom/server');
/* server-entry��ͨ��export default��������import���ס�
��node����require�ķ�ʽ��Ҫrequire(��../dist/server-entry��).defaultһ�� */
const serverEntry = require('./dist/server-entry').default;
const path = require('path');
const tplPath = path.join(__dirname, './dist/index.html');
const template = fs.readFileSync(tplPath, 'utf8');
const app = express();

app.use('/public', express.static(path.join(__dirname, './dist'))); //��̬�ļ�ָ�����󷵻�

app.get('*', (req, res) => {
	const appStr = ReactSSR.renderToString(serverEntry);
	res.send(template.replace('<!--app-->', appStr));
})

app.listen(2333, () => {
	console.log('server is listening on 2333');
})