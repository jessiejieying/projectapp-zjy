var $bottom = $('.bottom');


$bottom.on('tap', function(){
	sessionStorage.removeItem("username");
	window.location.href = './no.html';
});
