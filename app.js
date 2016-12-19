//引入path内置模块
var path = require('path');
//引入express依赖模块，用来启动静态服务器
var express = require('express');
//引入转发请求插件
//var proxy = require('http-proxy-middleware');

//实例express
var app = express();

//console.log(__dirname);
//console.log(__filename);
//拼接物理路径，用来做虚拟路径的访问(静态页面文件)
var viewsPath = path.join(__dirname,'views');
//console.log(viewsPath);

//指定访问页面的路径
app.use('/',express.static(viewsPath));

//拼接物理路径，用来做虚拟路径的访问(静态资源文件)
var publicPath = path.join(__dirname,'punlic');
//指定访问静态资源文件的路径
app.use('/public',express.static(path.join(__dirname,'public')));

var stylus = path.join(__dirname,'stylus');
app.use('/stylus',express.static(path.join(__dirname,'stylus')));

//监听端口9999，用来启动服务
app.listen(9999,function(){
	console.log('server run at port 9999');
});


//定义通过、api访问的请求，转发到指定路径
//http://127.0.0.1:9888/api/index
//替换为http://122.10.30.153:9901/index
//app.use('/api',proxy({
//	target：'http://122.10.30.153:9901',
//	pathRewrite:{
//		'^/api':'/'
//	}
//}));

//模块导出
module.exports = app;