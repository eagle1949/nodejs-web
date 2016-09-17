/*
* @File_name form.js
* @Author: Caijw
* @Date:   2016-09-17 15:37:22
* @Last Modified by:   Caijw
* @email 573301753@qq.com
* @Last Modified time: 2016-09-17 15:56:11
*/
var http = require('http');

var items = [];

var server = http.createServer(function(req,res){
	if('/'==req.url){
		switch(req.method){
			case 'GET' : 
				show(res);
				break;
			case 'POST' : 
				add(req, res);
				break;
			default : 
				badRequest(res);
		}
	}else{
		notFound(res);
	}
});

server.listen(3000);


function show(res){
	var html = '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"></head><body>'
				+ '<h1>todoList</h1>'
				+ '<ul>'
				+ items.map(function(item){
					return '<li>' + item + '</li>'
				}).join('')
				+ '</ul>'
				+'<form action="/" method="POST"><p><input type="text" name="item"></p><p><input type="submit" value="Add item"></p>'
    			+ '</form></body></html>';
   	res.setHeader('Content-Type' , 'text/html');
   	res.setHeader('Content-Length' , Buffer.byteLength(html));
   	res.end(html);
} 

function notFound(res){
	res.statusCode = 404;
	//MIME是服务器通知客户机传送文件是什么类型的主要方法，客户机浏览器也通过MIME告诉服务器它的参数。
     // 在网上，如果接收到的文件没有MIME头，就默认它为HTML格式。但这样也不好，因为当MIME的包头是text/plain时，浏览器将直接显示而不关心它的什么字体，颜色之类的参数
	res.setHeader('Content-Type', 'text/plain');
	res.end('not found');
}

function badRequest(res){
	res.statusCode = 400;
	res.setHeader('Content-Type', 'text/plain');
	res.end('bad request');
}

var qs = require('querystring');

function add(req, res){
	var body = '';
	req.setEncoding('utf8');
	req.on('data', function(chunk){
		body += chunk;
	});

	req.on('end', function(){
		var obj = qs.parse(body);
		items.push(obj.item);
		show(res);
	})
}