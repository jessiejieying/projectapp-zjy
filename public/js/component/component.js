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