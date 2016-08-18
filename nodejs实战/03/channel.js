/*
* @File_name channel.js
* @Author: Caijw
* @Date:   2016-08-18 01:35:51
* @Last Modified by:   Caijw
* @email 573301753@qq.com
* @Last Modified time: 2016-08-18 01:37:08
*/
var EventEmitter = require('events').EventEmitter;
var channel = new EventEmitter();

channel.on('join',function(){
	console.log('welcome');
});

channel.emit('join');