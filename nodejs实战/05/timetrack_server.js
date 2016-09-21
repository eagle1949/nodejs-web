/*
* @Author: Administrator
* @Date:   2016-09-18 13:05:36
* @Author: Caijw
* @Last Modified by:   Caijw
* @email 573301753@qq.com
* @Last Modified time: 2016-09-18 13:21:31
*/
var http = require('http');
var work = require('./lib/timetrack');
var mysql = require('mysql');


var db = mysql.createConnection({
	host : '127.0.0.1',
	user : 'root',
	password : 'mm.1234',
	database : 'timetrack'
});

var server = http.createServer(function(req, res){
	switch(req.method){
		case 'POST':
			switch(req.url){
				case '/' : 
					work.add(db, req, res);
					break;
				case '/archive' : 
					work.archive(db, req, res);
					break;
				case '/delete' :
					work.delete(db, req, res);
					break;
			}
			break;
		case 'GET' : 
			switch(req.url){
				case '/':
					work.show(db, res);
					break;
				case '/archived':
					work.showArchived(db, res);
					break;
			}
	}
});
