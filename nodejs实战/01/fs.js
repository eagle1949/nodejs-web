/*
* @File_name fs.js
* @Author: Caijw
* @Date:   2016-08-13 18:28:57
* @Last Modified by:   Caijw
* @email 573301753@qq.com
* @Last Modified time: 2016-08-13 18:29:45
*/
var fs = require('fs');

fs.readFile('./resource.json',function(err,data){
	console.log(data);
});