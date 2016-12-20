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