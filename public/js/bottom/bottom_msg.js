var $home = $('.bottom_bar .home_page_box');
var $appoint = $('.bottom_bar .appoint_box');
var $add = $('.bottom_bar .add_box');
var $message = $('.bottom_bar .message_box');
var $my = $('.bottom_bar .my_box');


$home.on('tap',function(){

	window.location.href = '../index/index.html';
});

$appoint.on('tap',function(){
	window.location.href = '../appointment/appointment.html';
});

$message.on('tap',function(){
	window.location.href = './msg_message.html';
});

$my.on('tap',function(){
	window.location.href = '../mine/no.html';
});