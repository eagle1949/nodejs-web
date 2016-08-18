/*
* @File_name blog.js
* @Author: Caijw
* @Date:   2016-08-14 20:30:10
* @Last Modified by:   Caijw
* @email 573301753@qq.com
* @Last Modified time: 2016-08-18 19:05:13
*/
var http = require('http');
var fs = require('fs');

// http.createServer(function(req, res){
// 	if(req.url=='/'){
// 		fs.readFile('./titles.json',function(err, data){
// 			if(err){
// 				console.error(err);
// 				res.end('server error');
// 			}else{
// 				var titles = JSON.parse(data.toString());
// 				fs.readFile('./template.html', function(err,data){
// 					if(err){
// 						console.error(err);
// 						res.end('server error');
// 					}else{
// 						var tmpl = data.toString();
// 						var html = tmpl.replace('%', titles.join('</li></li>'));
// 						 res.writeHead(200, {'Content-Type' : 'text/html'});
// 						 res.end(html);
// 					}
// 				})
// 			}
// 		})
// 	}
// }).listen(8000,'127.0.0.1');

//创建server
var server = http.createServer(function(req, res){
	//获得title
	getTitles(res);
}).listen(8000,'127.0.0.1');
console.log('server run 127.0.0.1:8000');


function getTitles(res){
	fs.readFile('./titles.json', function(err, data){
		if(err) return hadError(err, res);
		//获得模板
		getTemplate(JSON.parse(data.toString()), res);
	})
}

function getTemplate(titles, res){
	fs.readFile('./template.html', function(err, data){
		if(err) return hadError(err, res);
		//合并模板
		formatHtml(titles, data.toString(), res);
	})
}


function formatHtml(titles, tmpl, res){
	var html = tmpl.replace('%', titles.join('</li><li>'));
	res.writeHead(200,{'Content-Type' : 'text/html'});
	res.end(html);
}


function hadError(err, res){
	console.error(err);
	res.end('server error');
}