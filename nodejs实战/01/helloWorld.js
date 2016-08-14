/*
* @File_name helloWorld.js
* @Author: Caijw
* @Date:   2016-08-13 18:32:44
* @Last Modified by:   Caijw
* @email 573301753@qq.com
* @Last Modified time: 2016-08-13 18:39:28
*/
// var http = require('http');
// http.createServer(function(req,res){
// 	res.writeHead(200,{'Content-Type' : 'text/plain'});
// 	res.end('hello world\n');
// }).listen(3000);
// console.log('server runnint at http://localhost:3000');

// 只要有请求过来，它就会激发回调函数function (req, res)，
// 把“Hello World”写入到 响应中返回去。这个事件模型跟浏览
// 器中对onclick事件的监听类似。在浏览器中，点击事件随 时
// 都可能发生，所以要设置一个函数来执行对事件的处理逻辑，
// 而Node在这里提供了一个可以随 时响应请求的函数.
// 
// 
var http = require('http');
var server = http.createServer();
server.on('request',function(req,res){
	res.writeHead(200,{'Content-Type': 'text/plain'});
	res.end('hello world\n');
});
server.listen(3000);
console.log('3000');