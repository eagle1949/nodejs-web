/*
* @Author: Administrator
* @Date:   2016-09-18 13:22:31
* @Author: Caijw
* @Last Modified by:   Caijw
* @email 573301753@qq.com
* @Last Modified time: 2016-09-18 14:14:26
*/
var qs = require('querystring');

//发送html请求
exports.sendHtml = function(res, html){
	res.setHeader('Content-Type', 'text/html;charset=utf8');
	res.setHeader('Content-Length', Buffer.byteLength(html));
	res.end(html);
}

//解析html post数据
exports.parseReceivedData = function(req, cb){
	var body = '';
	req.setEncoding('utf8');
	req.on('data', function(chunk){
		body += chunk;
	});
	req.on('end', function(){
		var data = qs.parse(body);
		cb(data);
	})
}
//渲染简单表单
ecports.actionForm = function(id, path, label){
	var html = '<form method="POST" action="' + path + '">'+
				'<input type="hidden" name="id" value="'+id+'">' +
				'<input type="submit" value="'+label+'" />'+
				'</form>';
	return html;
}
//添加工作记录
ecports.add = function(db, req, res){
	exports.parseReceivedData(req, function(work){
		db.query(
			'INSERT INTO work (hours, date, description) value(?,?,?)',
			[work.hours, work.date, work.description],
			function(err){
				if(err) throw err;
				exports.show(db, res);
			}
		);
	})
}
//删除工作记录
exports.delete = function(db, req, res){
	exports.parseReceivedData(req, function(work){
		db.query(
			'delete from work where id=?',
			[work.id],
			function(err){
				if(err) throw err;
				exports.show(db, res);
			}
		)
	})
}

//归档一条记录
exports.archive = function(db, req, res){
	exports.parseReceivedData(req, function(work){
		db.query(
			'update work set archived=1 where id=?',
			[work.id],
			function(err){
				if(err) throw err;
				exports.show(db, res);
			}
		);
	})
}

//获取mysql数据
exports.show = function(db, res, showArchived){
	var query = 'select * from work where archived=? order by date desc';
	var archiveValue = (showArchived) ? 1 : 0;
	db.query(query,[archiveValue],function(err, rows){
		if(err) throw err;
		var html = (showArchived) ? '' : '<a href="/archived">Archived work</a><br/>';
			html+= exports.workHitlistHtml(rows);
			html+= exports.workFormHtml();
			exports.sendHtml(res, html);
	})
}

exports.showArchived = function(db, res){
	exports.show(db, res, true);
}

//渲染mysql的工作记录
ecports.workHitlistHtml = function(rows){
	var html = '<table>';
	for(var i in rows){
		html+= '<tr><td>'+rows[i].date+'</td><td>'+rows[i].hours+'</td><td>'+rows[i].description+'</td></tr>';
	}
	
	'</table>';
	if(r)
}