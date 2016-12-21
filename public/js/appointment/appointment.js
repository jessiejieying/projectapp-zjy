
var $cell = $('.demand_cells .demand_cell');
var $hidden = $('.demand_cells .demand_cell .hidden-box');
var wd = $(window).width();

$hidden.css('left',wd+'px');



$cell.on('swipeLeft', function(){	
	console.log("touchleft");
	var $self = $(this);
    var index = $self.index();
	$cell.eq(index).css('transform', 'translateX(-'+ 65 +'px)');
       
});
$cell.on('swipeRight', function(){
    console.log('touch right');
    var $self = $(this);
    var index = $self.index();
    $cell.eq(index).css('transform', 'translateX(-'+ 0 +'px)');
    
});