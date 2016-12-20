
var $cell = $('.demand_cells .demand_cell');


$cell.on('swipeLeft', function(){	
	console.log("touchleft");
	var $self = $(this);
    var index = $self.index();
	$cell.eq(index).css('transform', 'translateX('+ 65 +'px)');
       
});
$cell.on('swipeRight', function(){
    console.log('touch right');
    var $self = $(this);
    var index = $self.index();
    $self.css('transform', 'translateX(-'+ 0 +'px)');
    
});