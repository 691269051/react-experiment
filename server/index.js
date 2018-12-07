const express = require('express'); // 项目服务端使用express框架
const app = express();
const path = require('path');
const fs = require('fs');

//使用nodejs自带的http、https模块
const http = require('http');
const https = require('https');

//根据项目的路径导入生成的证书文件
const privateKey = fs.readFileSync(
    path.join(__dirname, './certificate/server.key'),
    'utf8'
);
const certificate = fs.readFileSync(
    path.join(__dirname, './certificate/server.crt'),
    'utf8'
);
const credentials = { key: privateKey, cert: certificate };

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

//可以分别设置http、https的访问端口号
const PORT = 8000;
const SSLPORT = 8001;

app.use(express.static(path.join(process.cwd(), 'build')));

//创建https服务器
httpsServer.listen(SSLPORT, function() {
    console.log('HTTPS Server is running on: https://localhost:%s', SSLPORT);
});

//创建http服务器
// httpServer.listen(PORT, function() {
//     console.log('HTTP Server is running on: http://localhost:%s', PORT);
// });
// app.get('/list', function (req, res) {
//     res.send(JSON.stringify({list:[1,2,2,3,3,3,3,3,3,3]}))
// })

app.get('/*', function(req, res) {
    res.sendFile(path.join(process.cwd(), 'build', 'index.html'));
});

// app.post('/gipms/mobile/person/detail', function (req, res) {
//     console.log(req, res)
//     res.send({ddddd:12})
// })




