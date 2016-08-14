/*
* @File_name chart.js
* @Author: Caijw
* @Date:   2016-08-13 20:25:05
* @Last Modified by:   Caijw
* @email 573301753@qq.com
* @Last Modified time: 2016-08-13 22:39:05
*/
var Chart = function(socket){
	this.socket = socket;
}


Chart.prototype.sendMessage = function(room, text){
	var message = {
		room : room,
		text : text
	};

	this.socket.emit('message',message);
}

Chart.prototype.changeRoom = function(room){
	this.socket.emit('join',{
		newRoom : room
	})
}


Chart.prototype.processCommand = function(command){
	var words = command.split(' ');
	var command = words[0].substring(1, words[0].length).toLowerCase();
	var message = false;

	console.log('apple');

	switch(command){
		case 'join' : 
			words.shift();
			var room = words.join(' ');
			this.changeRoom(room);
			break;
		case 'nick' :
			words.shift();
			var name = words.join(' ');
			this.socket.emit('nameAttempt', name);
			break;
		default:
			message = 'Unrecognized command.';
			break;
	}
	return message;
}