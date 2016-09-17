/*
* @File_name rest.js
* @Author: Caijw
* @Date:   2016-09-16 23:49:49
* @Last Modified by:   Caijw
* @email 573301753@qq.com
* @Last Modified time: 2016-09-17 00:04:18
*/
var http = require('http');
var url = require('url');
var items = [];
var server = http.createServer(function(req, res){
	switch(req.method){
		case 'POST' :
		var item = '';
		req.setEncoding('utf8');
		req.on('data', function(chunk){
			item += chunk;

		});
		req.on('end', function(){
			items.push(item);
			res.end('OK\n');
		})
		break;
		case  'GET':
			console.log('GET');
			items.forEach(function(item, i){
				res.write(i+')'+item+'\n');
			});
			res.end();
			break;
	}
	// req.on('data', function(chunk){
	// 	console.log('parsed', chunk);
	// });
	// req.on('end', function(){
	// 	conosle.log('done parsing');
	// 	res.end();
	// });
}).listen(3000);
console.log('server start 3000');