//var td = new Array(),      
	    playing = false,       
	    score = 0,             
	    beat = 0,              
	    success = 0,           
	    knock = 0,             
	    countDown = 30,        
	    interId = null,        
	    timeId = null;         
	

	function GameOver(){
	    timeStop();
	    playing = false;
	    clearMouse();
	    alert("游戏结束！\n你获得的分数为："+score+"\n命中率为："+success);
	    success = 0;
	    score = 0;
	    knock = 0;
	    beat = 0;
	    countDown = 30;
	}
	

	function timeShow(){
	    document.form1.remtime.value = countDown;
	    if(countDown == 0){
	        GameOver();
	        return;
	    }else{
	        countDown = countDown-1;
	        timeId = setTimeout("timeShow()",1000);
	    }
	}
	

	function timeStop(){
	    clearInterval(interId);//clearInterval()方法返回setInterval()方法的id
	    clearTimeout(timeId);//clearTime()方法返回setTimeout()的id
	}
	

	function show(){
	    if(playing)
	    {
	        var current = Math.floor(Math.random()*25);
	        document.getElementById("td["+current+"]").innerHTML = '<div class="mouse"></div>';
	        setTimeout("document.getElementById('td["+current+"]').innerHTML=''",3000);
	    }
	}
	

	function clearMouse(){
	    for(var i=0;i<=24;i++)
	    {
	        document.getElementById("td["+i+"]").innerHTML="";
	    }
	}
	

	var td = document.getElementsByTagName("td");
	for(var i = 0; i < td.length; i++){
		td[i].onclick = function(){
			//console.log(this);
		    if(playing==false)
		    {
		        alert("请点击开始游戏");
		        return;
		    }
		    else
		    {    
		         beat +=1;
		        if(this.innerHTML!="")
		        {
		            score += 1;
		            knock +=1;
		            success = knock/beat;
		            document.form1.success.value = success;
		            document.form1.score.value = score;
		            
		            
		            this.getElementsByClassName("mouse")[0].style.backgroundPosition = "-428px -20px";
		            var _this = this;
		            setTimeout(function(){
		            	_this.innerHTML="";
		            }, 500)
		            
		        }
		        else
		        {
		            score += -1;
		            success = knock/beat;
		            document.form1.success.value = success;
		            document.form1.score.value = score;
		        }
		    }
		}
	}
	

	

	function GameStart(){
	    playing = true;
	    interId = setInterval("show()",1000);
	    document.form1.score.value = score;
	    document.form1.success.value = success;
	    timeShow();
	}

