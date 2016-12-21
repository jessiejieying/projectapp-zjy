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
	$text2.on('tap', function(){	
		$success.hide();
	
	});
});

var $title = $('.head_title_left');
$title.on('tap', function(){
	window.location.href = './addafter.html';
});