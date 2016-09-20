/*
* @File_name http.js
* @Author: Caijw
* @Date:   2016-09-18 23:53:03
* @Last Modified by:   Caijw
* @email 573301753@qq.com
* @Last Modified time: 2016-09-20 22:12:12
*/

function logger(req, res, next){
	console.log('%s %s', req.method, req.url);
	next();
}
function hello(req, res){
	res.setHeader('Content-Type', 'text/plain');
	res.end('hello world');
}
//认证中间件
function restrict(req, res, next){
	var authorization = req.headers.authorization;

	if(!authorization) return next(new Error('Unauthorized'));

	var parts = authorization.split(' ');

	var scheme = parts[0];
	var auth = new Buffer(parts[1], 'base64').toString().split(':');

	var user = auth[0];
	var pass = auth[1];

	authorizationWithDatabase(user, pass, function(err){
		if(err) return next(err);
		next();
	})
}
//显示管理面板的中间件
function admin(req, res, next){
	switch(req.url){
		case '/' :
			res.end('try /users');
			break;
		case '/users' :
		 	res.setHeader('Content-Type', 'application/json');
		 	res.end(JSON.stringify(['tobi','loki','jane']));
		 	break;
	}
}


var connect = require('connect');
var app = connect();
app.use(logger);
app.use('/admin',restrict);
app.use('/admin', admin);
app.use(hello);
app.listen(3000);