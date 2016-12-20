//获取轮播每个元素
var $slider = $('.slider_block');
//获取轮播容器
var $sliderCon = $('.slider_container');
//获取所有的点
var $point = $('.point_block');

//获取屏幕宽度
var wd = $(window).width();
var lg = $slider.length;
var allWd = wd * lg;
var hg = wd * 0.85;
$sliderCon.width(allWd);
$slider.width(wd).height(hg);



var swipeNow = 0;
var slideTime;

$sliderCon.on('swipeLeft', function(){
    console.log('touch left');
    clearTimeout(slideTime);
    if(swipeNow < lg - 1){
        var swipeWd = (++swipeNow) * wd;
        $sliderCon.css('transform', 'translateX(-'+ swipeWd +'px)');
        $point.removeClass('active').eq(swipeNow).addClass('active');
        autoSwipe();
    }
});
$sliderCon.on('swipeRight', function(){
    console.log('touch right');
    clearTimeout(slideTime);
    if(swipeNow > 0){
        var swipeWd = (--swipeNow) * wd;
        $sliderCon.css('transform', 'translateX(-'+ swipeWd +'px)');
        $point.removeClass('active').eq(swipeNow).addClass('active');
        autoSwipe();
    }
});

function autoSwipe(){
    slideTime = setTimeout(function(){
        if(swipeNow < lg - 1){
            var swipeWd = (++swipeNow) * wd;
            $sliderCon.css('transform', 'translateX(-'+ swipeWd +'px)');
            $point.removeClass('active').eq(swipeNow).addClass('active');
            autoSwipe();
        }
    }, 2000);
}
autoSwipe();

var $queyrBlock = $('.query_block');
var $iconlist = $('.query_block .icon');
$queyrBlock.on('tap', function(){
    var $self = $(this);
    var index = $self.index();
    console.log(index);
    if($self.hasClass('active')){
        $self.removeClass('active');
        $iconlist.eq(index).removeClass('selected');
        $('.down-box').eq(index).hide();
    }else{
        $queyrBlock.removeClass('active');
        $iconlist.removeClass('selected');
        $self.addClass('active');
        $iconlist.eq(index).addClass('selected');
        $('.down-box').hide().eq(index).show();
        
    }
});

$('.query_price').on('tap', function(){
    var $self = $(this);
    if($self.hasClass('active-down')){
        //console.log('up');
        $self.removeClass('active-down').addClass('active-up');
    }else if($self.hasClass('active-up')){
        //console.log('normal');
        $self.removeClass('active-up');
    }else{
        //console.log('down');
        $self.addClass('active-down');
    }
})



