/*
* @File_name image.js
* @Author: Caijw
* @Date:   2016-08-13 19:42:17
* @Last Modified by:   Caijw
* @email 573301753@qq.com
* @Last Modified time: 2016-08-13 19:48:07
*/
var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type' : 'image/png'});
	fs.createReadStream('./image.png').pipe(res);
}).listen(3000);