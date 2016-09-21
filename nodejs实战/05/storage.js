/*
* @File_name storage.js
* @Author: Caijw
* @Date:   2016-09-17 23:01:34
* @Last Modified by:   Caijw
* @email 573301753@qq.com
* @Last Modified time: 2016-09-21 09:29:51
*/
var http = require('http');

var counter = 0;

var server = http.createServer(function(req, res){
	counter++;
	res.write('I have been accessed ' + counter + ' times');
	res.end();
}).listen(8888);
