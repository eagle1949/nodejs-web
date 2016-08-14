/*
* @File_name chunk.js
* @Author: Caijw
* @Date:   2016-08-13 19:35:35
* @Last Modified by:   Caijw
* @email 573301753@qq.com
* @Last Modified time: 2016-08-13 19:40:25
*/
var fs = require('fs');
var stream = fs.createReadStream('./resource.json');
stream.on('data',function(chunk){
	console.log(chunk);
});

stream.on('end',function(){
	console.log('finish');
})