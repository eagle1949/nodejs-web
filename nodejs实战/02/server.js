/*
* @File_name server.js
* @Author: Caijw
* @Date:   2016-08-13 20:24:30
* @Last Modified by:   Caijw
* @email 573301753@qq.com
* @Last Modified time: 2016-08-13 21:27:22
*/
var http = require('http');

var fs = require('fs');

var path = require('path');

var mime = require('mime');

var cache = {};


//发送文件数据以及错误响应
function send404(response){
	response.writeHead(404, {"Content-Type" : "text/plain"});
	response.write("Error 404: response not found");
	response.end();
}

// 第二个辅助函数提供文件数据服务。这个函数先写出正确的HTTP头，然后发送文件的内容
function sendFile(response,filePath, fileContents){
	response.writeHead(200,{"Content-Type" : mime.lookup(path.basename(filePath))});
	response.end(fileContents);
}

//提供静态文件服务
function serverStatic(response, cache, absPath){
	if(cache[absPath]){
		sendFile(response,absPath, cache[absPath]);
	}else{
		fs.exists(absPath, function(exists){
			if(exists){
				fs.readFile(absPath, function(err,data){
					if(err){
						send404(response);
					}else{
						cache[absPath] = data;
						sendFile(response, absPath, data);
					}
				})
			}else{
				send404(response);
			}
		})
	}
}

//创建http服务
var server = http.createServer(function(require,response){
	var filePath = false;

	if(require.url=='/'){
		filePath = 'public/index.html';
	}else{
		filePath = 'public' + require.url;
	}

	var absPath = './' +filePath;
	serverStatic(response,cache,absPath);
})

server.listen(3000,function(){
	console.log('server listening on port 3000');
});

var chartServer = require('./lib/chart_server');
chartServer.listen(server);