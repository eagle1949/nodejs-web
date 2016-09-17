/*
* @File_name pipe.js
* @Author: Caijw
* @Date:   2016-09-17 14:36:05
* @Last Modified by:   Caijw
* @email 573301753@qq.com
* @Last Modified time: 2016-09-17 15:18:41
*/
var http = require('http');
var parse = require('url').parse; //url解析
var join = require('path').join; //拼接路径
var fs = require('fs');

var root = __dirname; //该文件所在目录路径
var server = http.createServer(function(req, res){
	var url = parse(req.url);
	var path = join(root, url.pathname); //绝对路径

	fs.stat(path, function(err,stat){
		if(err){
			if('ENOENT' == err.code){
				res.statusCode = 404;
				res.end('not found');
			}else{
				res.statusCode = 500;
				res.end('server error');
			}
		}else{
			res.setHeader('Content-Length', stat.size);
			var stream = fs.createReadStream(path);
			stream.pipe(res);
			// stream.on('data',function(chunk){
			// 	// console.log(chunk);
			// 	res.write(chunk);
			// });

			// stream.on('end', function(){
			// 	res.end();
			// })
			//抛出异常
			stream.on('error', function(err){
				res.statusCode = 500;
				res.end('server error');
			})
		}
	})
	
});

server.listen(3000);
