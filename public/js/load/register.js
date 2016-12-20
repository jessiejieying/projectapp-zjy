var $icon = $('.form-list .identity .icon-identity');
var $hidden = $('.form-list .identity .hidden_box');

$icon.removeClass('identity-active');
$icon.on('tap', function(){

    if($icon.hasClass('identity-active')){
        $icon.removeClass('identity-active');
        $hidden.hide();
    }else{
        $icon.addClass('identity-active');
        $hidden.show(); 
    }
});

var $list = $('.form-list .identity ul li');
var $input = $('.form-list .identity .input-identity');
var $button = $('.button');
var $list1 = $('.form-list .form-cell .input-name');
var $list2 = $('.form-list .form-cell .input-key');
var $list3 = $('.form-list .form-cell .input-password');
var $list4 = $('.form-list .form-cell .input-password1');


$list.on('tap', function(){
    var $self = $(this);
    var index = $self.index();
    //console.log(index);
    //console.log($self.text());
	$input.val($self.text());
});
 
//$input.on('blur', function(){
//	if($list1.value != "" && $list2.value != "" && $list3.value != "" && $list4.value != "" && $list.value != ""){
//		$button.css("background","#EA5404");
//		$button.on('tap', function(){
//			window.location.href = './mine/after.html';
//		});
//	}	
//});

var $code = $('.form-list .form-cell .form-cell-code');

$code.on('tap',function(){
	$code.css("background","#C7C7C7");
	var time =60;
    setTime=setInterval(function(){
        if(time<=0){
            clearInterval(setTime);
            $code.css("background","#EA5404");
        	$code.text("获取验证码");
            return;
        }
        time--;
        $code.text(time +"s后重新获取");
    },1000);
});




