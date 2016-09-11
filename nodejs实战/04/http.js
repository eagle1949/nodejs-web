/*
* @File_name http.js
* @Author: Caijw
* @Date:   2016-09-12 00:04:02
* @Last Modified by:   Caijw
* @email 573301753@qq.com
* @Last Modified time: 2016-09-12 00:04:59
*/
var http = require('http');
var server = http.createServer(function(req,res){
	res.end('hello world');
});
server.listen(3000);