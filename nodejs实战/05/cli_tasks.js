/*
* @File_name cli_tasks.js
* @Author: Caijw
* @Date:   2016-09-17 23:05:24
* @Last Modified by:   Caijw
* @email 573301753@qq.com
* @Last Modified time: 2016-09-17 23:25:49
*/
var fs = require('fs');
var path = require('path');
var args = process.argv.splice(2);//去掉‘node cli_tasks.js’只留下参数

var command = args.shift();//取出第一个参数
var taskDescription = args.join(' ');//合并其余参数
var file = path.join(process.cwd(),'/.tasks');

switch(command){
	case 'list':
		listTasks(file);
		break;
	case 'add':
		addTask(file, taskDescription);
		break;
	default :
		console.log('Usage '+ process.argv[0]+' list|add [taskDescription]');
}


//从文本文件中加载用json编码的数据
function loadOrInitializeTaskArray(file, cb){
	fs.exists(file, function(exists){
		var tasks = [];
		if(exists){
			fs.readFile(file, 'utf8', function(err, data){
				if(err) throw err;
				var data = data.toString();
				tasks = JSON.parse(data|| '[]');
				cb(tasks);
			})
		}else{
			cb([]);
		}
	})
}
//list
function listTasks(file){
	loadOrInitializeTaskArray(file, function(tasks){
		for(var i in tasks){
			console.log(tasks[i]);
		}
	})
}

function storeTasks(file, tasks){
	fs.writeFile(file, JSON.stringify(tasks), 'utf8', function(err){
		if(err) throw err;
		console.log('saved.');
	})
}

function addTask(file, taskDescription){
	loadOrInitializeTaskArray(file, function(tasks){
		tasks.push(taskDescription);
		storeTasks(file, tasks);
	})
}
