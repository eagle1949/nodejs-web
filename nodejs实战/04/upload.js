/*
* @File_name upload.js
* @Author: Caijw
* @Date:   2016-09-17 21:12:58
* @Last Modified by:   Caijw
* @email 573301753@qq.com
* @Last Modified time: 2016-09-17 21:38:44
*/
var http = require('http');


var server = http.createServer(function(req, res){
	switch(req.method){
		case 'GET' : 
			show(req, res);
			break;
		case 'POST' : 
			upload(req, res);
			break;
	}
}).listen(3000);

function show(req, res){
	var html = ''+ '<form action="/" method="POST" enctype="multipart/form-data"><p><input type="text" name="name"></p><p><input type="file" name="file"></p><p><input type="submit" value="Add item"></p></form>';
	res.setHeader('Content-Type', 'text/html');
	res.setHeader('Content-Length', Buffer.byteLength(html));
	res.end(html);
}

var formidable = require('formidable');

function upload(req, res){
	if(!isFormData(req)){
		res.statusCode = 400;
		res.end('Bad request');
		return;
	}

	var form = new formidable.IncomingForm();
	form.parse(req, function(err, fields, files){
		// console.log(fields);
		// console.log(files);
		res.end('upload complete');

	})

	form.on('progress', function(bytesReceived, bytesExpected){
		var percent = Math.floor(bytesReceived/bytesExpected*100);
		console.log(percent);
	})
	// form.parse(req);

	// form.on('filed', function(filed, value){
	// 	console.log(filed);
	// 	console.log(value);
	// });
	// form.on('file', function(name, file){
	// 	console.log(name);
	// 	console.log(file);
	// });

	// form.on('end', function(){
	// 	res.end('upload complete');
	// });
	// form.parse(req);


}



function isFormData(req){
	var type = req.headers['content-type'] || '';
	return 0== type.indexOf('multipart/form-data');
}