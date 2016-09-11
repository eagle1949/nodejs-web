/*
* @File_name color.js
* @Author: Caijw
* @Date:   2016-08-20 21:48:40
* @Last Modified by:   Caijw
* @email 573301753@qq.com
* @Last Modified time: 2016-08-20 22:16:45
*/
function asyncFunction(callback){
	setTimeout(callback, 200);
}
var color = 'blue';
asyncFunction(function(){
	console.log('The color is ' + color);
});

// (function(color){
// 	asyncFunction(function(){
//  		console.log('The color is ' + color);
// 	 });
// })(color);

color  = 'green';