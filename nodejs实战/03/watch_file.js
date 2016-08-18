function Watcher(watchDir, processedDir){
	this.watchDir = watchDir;
	this.processedDir = processedDir;
}
//继承EventEmitter
var events = require('events'),util = require('util');
util.inherits(Watcher, events.EventEmitter);

var fs = require('fs'),watchDir = './watch',processedDir = './done';

//watch函数
Watcher.prototype.watch = function(){
	var watcher = this; 
	//读文件夹下面的所有文件
	fs.readdir(this.watchDir, function(err, files){
		if(err) throw err;
		for(var index in files){
			//触发事件
			watcher.emit('process', files[index]);
		}
	})
}

Watcher.prototype.start = function(){
	var watcher = this;
	//监听文件变化
	fs.watchFile(watchDir, function(){
		watcher.watch();
	})
}


var watcher = new Watcher(watchDir, processedDir);
watcher.on('process', function(file){
	//文件重新命名
	var watchFile = this.watchDir + '/' + file;
	var processedFile = this.processedDir + '/' + file.toLowerCase();

	fs.rename(watchFile, processedFile, function(err){
		if(err) throw err;
	})
});

watcher.start();