var $icon = $('.header .icon-setup');
var $message = $('.bottom_bar .message_box');


$icon.on('tap', function(){
	window.location.href = './setup.html';
});

$message.on('tap', function(){
	window.location.href = '../msg/msg_message.html';
});
