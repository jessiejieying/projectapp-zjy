var xhr = new XMLHttpRequest();

xhr.open('get','http://122.10.30.153:9901/index');

xhr.send();

xhr.onreadystatechange = function(){
	if(xhr.status === 200 || xhr.readyState ===4){
		console.log('success',JSON.parse(xhr.response))
	}
}


$.ajax({
	url:'http://122.10.30.153:9901/login',
	type:'get',
	dataType:'json',
	success:function(result){
		console.log('result',result)
	},
	complete:function(res){
		console.log('res',res)
	}
})
