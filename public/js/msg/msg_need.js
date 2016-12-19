var $message = $('.tab_box .tab_bar .message');
var $notice = $('.tab_box .tab_bar .notice');
var $homepage= $('.bottom_bar .home_page_box');

$message.on('tap', function(){
	window.location.href = './msg_message.html';
});

$notice.on('tap', function(){
	window.location.href = './msg_notice.html';
});

$homepage.on('tap', function(){
	window.location.href = '../index/index.html';
});
