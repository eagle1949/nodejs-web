/*
* @File_name echo_server.js
* @Author: Caijw
* @Date:   2016-08-14 20:53:43
* @Last Modified by:   Caijw
* @email 573301753@qq.com
* @Last Modified time: 2016-08-14 23:05:37
*/
var net = require('net');

var server  = net.createServer(function(socket){
	socket.once('data',function(data){
		socket.write(data);
	})
});

server.listen(8888);
