/*
* @File_name nimble.js
* @Author: Caijw
* @Date:   2016-08-20 22:18:23
* @Last Modified by:   Caijw
* @email 573301753@qq.com
* @Last Modified time: 2016-08-20 22:20:52
*/
var flow = require('nimble');

flow.series([
	function(callback){
		setTimeout(function(){
			console.log('first');
			callback();
		},1000);
	},
	function(callback){
		setTimeout(function(){
			console.log('second');
			callback();
		},2000);
	},
])