var $notice = $('.tab_box .tab_bar .notice');
var $need = $('.tab_box .tab_bar .need');
var $homepage= $('.bottom_bar .home_page_box');


$notice.on('tap', function(){
	window.location.href = './msg_notice.html';
});

$need.on('tap', function(){
	window.location.href = './msg_need.html';
});

$homepage.on('tap', function(){
	window.location.href = '../index/index.html';
});
