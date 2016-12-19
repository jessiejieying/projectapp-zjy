var $message = $('.tab_box .tab_bar .message');
var $need = $('.tab_box .tab_bar .need');
var $homepage= $('.bottom_bar .home_page_box');


$message.on('tap', function(){
	window.location.href = './msg_message.html';
});

$need.on('tap', function(){
	window.location.href = './msg_need.html';
});

$homepage.on('tap', function(){
	window.location.href = '../index/index.html';
});
