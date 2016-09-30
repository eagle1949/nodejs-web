/*
* @Author: Administrator
* @Date:   2016-09-30 14:51:10
* @Author: Caijw
* @Last Modified by:   Caijw
* @email 573301753@qq.com
* @Last Modified time: 2016-09-30 15:40:22
*/
var express = require('express');
var router = express.Router();
var photos = [];
photos.push({
	name : 'node.js logo',
	path : 'http://nodejs.org/images/logos/nodejs-green.png'
});
photos.push({
	name : 'Ryan speaking',
	path : 'http://nodejs.org/images/ryan-speaker.jpg'
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('photos',{
		title : 'photos',
		photos : photos
	});
});
module.exports = router;