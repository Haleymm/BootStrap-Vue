$(document).ready(function() {
	window.alert('getScript()方法执行js文件的内容')
})

function getFormInfo() {
	var name = 'wen';
	var user = 'chen';
	$.ajax({
		url: "/login/authenticate?name=" + name + "&user=" + user,
		type: "POST",
		data: {},
		dataType: "json",
		success: function(data) {

		},
		error: function(err) {
			console.log(err.statusText);
			console.log('异常');
		}
	});
}

function getFormInfo() {
	var name = 'chen';
	var user = 'wen';
	$.ajax({
		url: "http://192.168.10.32:6833/login/authenticate",
		type: "POST",
		data: 'name=' + name + '&user=' + user,
		cache: false,
		dataType: "json",
		success: function(data) {

		},
		error: function(err) {}
	});
}

function getFormInfo() {
	$.ajax({
		url: "http://192.168.10.32:6833/login/authenticate",
		type: "POST",
		data: {
			name: 'chem',
			user: 'wen'
		},
		cache: false,
		dataType: "json",
		success: function(data) {

		},
		error: function(err) {}
	});
}

