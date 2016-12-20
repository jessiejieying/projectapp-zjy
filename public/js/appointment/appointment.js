
var $cell = $('.demand_cells .demand_cell');
var wd = $(window).width();




var swipeNow = 0;
var slideTime;

$cell.on('swipeLeft', function(){
	var $self = $(this);
    var index = $self.index();
    console.log('touch left');
    clearTimeout(slideTime); 
    $cell
    $self.css('transform', 'translateX(-'+ 65 +'px)'); 
    autoSwipe();
    
});
$cell.on('swipeRight', function(){
	var $self = $(this);
    var index = $self.index();
    console.log('touch right');
    clearTimeout(slideTime);
    $self.css('transform', 'translateX(-'+ 65 +'px)');
    autoSwipe();
});