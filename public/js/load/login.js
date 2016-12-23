var $buttom1 = $('.buttom1');
var $buttom2 = $('.buttom2');
var $button = $('.button');
var $text1 = $('.form-list .form-cell .cell-text1');
var $text2 = $('.form-list .form-cell .cell-text2');
var $back = $('.icon-back');


$buttom1.on('tap', function(){
	window.location.href = './register.html';
});

$back.on('tap', function(){
	window.location.href = './mine/no.html';
});

$buttom2.on('tap', function(){
	window.location.href = './forgetpassword.html';
});


flag = false;
$text2.on('blur', function(){
	console.log($text1.value);
	console.log($text2.value);
	if($text1.value != "" && $text2.value != ""){
		$button.css("background","#EA5404");
		flag = true;
		
	}	
});

$button.on('tap', function(){
	if(flag){
		window.location.href = './mine/after.html';
		sessionStorage.setItem("username",$text1.value);
	}
	
});
