var $radioList = $('.radio_box .radio_block');
$radioList.on('tap', function(){
   var $self = $(this);
   if(!$self.hasClass('selected')){
      $radioList.removeClass('selected');
      $self.addClass('selected');
   }
});

var $circle = $('.text_box .form-cell .form-cell_number');
$circle.on('tap', function(){
   var $self = $(this);
   if(!$self.hasClass('selected')){
      //$circle.removeClass('selected');
      $self.addClass('selected');
   }else{
   	  $self.removeClass('selected');
   }
});


var $release = $('.release');
var $success = $('.success_box');
var $text2 = $('.success_text2');

$release.on('tap', function(){	
	$success.show();
	topSlide = setInterval(function(){
	var wintop = $(window).scrollTop();
		if(wintop == 0){
			clearInterval(topSlide);
		}
		$(window).scrollTop(wintop-10)
	},10)
	$text2.on('tap', function(){	
		window.location.href = '../index/index.html';
	
	});
});

var $title = $('.head_title_left');
$title.on('tap', function(){
	window.location.href = './addafter.html';
});


