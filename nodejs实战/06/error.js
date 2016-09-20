/*
* @File_name error.js
* @Author: Caijw
* @Date:   2016-09-20 22:31:58
* @Last Modified by:   Caijw
* @email 573301753@qq.com
* @Last Modified time: 2016-09-20 22:53:54
*/
// function errorHandler(){
// 	var env = process.env.NODE_ENV || 'development';

// 	return function(err, req, res, next){
// 		res.statusCode = 500;
// 		switch(env){
// 			case 'development' :
// 				res.setHeader('Content-Type', 'application/json');
// 				res.end(JSON.stringify(err));
// 				break;
// 			default:
// 				res.end('server err');
// 		}
// 	}
// }

function errorHandler(err, req, res, next){
	console.log(err.stack);
	res.setHeader('Content-Type', 'application/json');
	if(err.notFound){
		res.statusCode = 404;
		res.end(JSON.stringify({error:err.message}));

	}else{
		res.statusCode = 500;
		res.end(JSON.stringify({error:'internal server error'}))
	}
}
var connect = require('connect');
var app = connect();
app.use('/api');
app.use(errorHandler);
