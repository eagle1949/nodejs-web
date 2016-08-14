/*
* @File_name chart_ui.js
* @Author: Caijw
* @Date:   2016-08-13 20:25:25
* @Last Modified by:   Caijw
* @email 573301753@qq.com
* @Last Modified time: 2016-08-13 22:51:49
*/
function divEscapedContentElement(message){
	return $('<div></div>').text(message);
}

function divSystemContentElement(message){
	return $('<div></div>').html('<i>' +message+ '</i>');
}

//处理原生用户输入
function processUserInput(chartApp, socket){
	var message = $('#send-message').val();
	var systemMessage;
	console.log('ccc');
	console.log(message);
	console.log(message.charAt(0));
	if(message.charAt(0)=='/'){
		console.log('yes');
		systemMessage = chartApp.processCommand(message);
		if(systemMessage){
			$('#messages').append(divSystemContentElement(systemMessage));
		}

	}else{

		console.log('no');
		chartApp.sendMessage($('#room').text(),message);
		$('#messages').append(divEscapedContentElement(message));
		$('#messages').scrollTop($('#message').prop('scrollHeight'));
	}

	$('#send-message').val('');
}


var socket = io.connect();

$(document).ready(function(){
	var chartApp = new Chart(socket);
	socket.on('nameResult',function(result){
		var message;
		if(result.success){
			message = 'You are now known as ' + result.name + '.';
		}else{
			message = result.message;
		}
		$('#messages').append(divSystemContentElement(message));
	});

	socket.on('joinResult', function(result){
		$('#room').text(result.room);
		$('#messages').append(divSystemContentElement('room changed'));
	});

	socket.on('message',function(message){
		var newElement = $('<div></div>').text(message.text);
		$('#messages').append(newElement);
	});


	socket.on('rooms', function(rooms){
		$('#room-list').empty();
		for(var room in rooms){
			room = room.substring(1, room.length);
			if(room!=''){
				$('#room-list').append(divEscapedContentElement(room));
			}
		}

		$('#room-list div').click(function(event) {
			chartApp.processCommand('/join ' + $(this).text());
			$('#send-message').focus();
		});

	})
	setInterval(function(){
		socket.emit('rooms');
	}, 1000);

	$('#send-message').focus();

	// $('#send-form').submit(function(event) {
	// 	console.log('sss');
	// 	processUserInput(chartApp,socket);
	// 	return false;
	// });

	$('#send-button').click(function(event) {
		processUserInput(chartApp,socket);
		return false;
	});
})