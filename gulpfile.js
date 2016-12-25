//首先引入gulp模块
var gulp = require('gulp');
//引入 gulp-stylus 插件
var stylus = require('gulp-stylus');
//引入压缩css插件
var minifycss = require('gulp-minify-css');
//引入压缩js插件
var uglify = require('gulp-uglify');
var nodemon = require('gulp-nodemon');

var browserSync = require('browser-sync').create();
var reload = browserSync.reload;


//创建一个编译stylus的任务
gulp.task('stylus',function(){
	//获取要编译的文件
	//gulp.src('./stylus/index.styl');
	//获取要编译的两个文件
	//gulp.src('./stylus/index.styl','./stylus/css.styl');
	//指定一个目录下所有（不包含子目录）
	//gulp.src('./stylus/*.styl');
	//指定一个目录下所有子目录下的文件
	return gulp.src('./stylus/**/*.styl')
		//执行stylus编译
		.pipe(stylus())
		//输出编译后的文件
		.pipe(gulp.dest('./public/css'))
})


//压缩css文件
gulp.task('minifycss',['stylus'],function(){
	return gulp.src('./public/css/**/*.css')
		//执行stylus编译
		.pipe(minifycss())
		//输出编译后的文件
		.pipe(gulp.dest('./public/mincss/'))
})

//压缩js文件
gulp.task('uglify',function(){
	return gulp.src('./public/js/**/*.js')
		//执行stylus编译
		.pipe(uglify())
		//输出编译后的文件
		.pipe(gulp.dest('./public/minjs/'))
})



gulp.task('nodemon',function(ab){
	var ft = false;
	return nodemon({
		script:'./server.js'
	}).on('start',function(){
		if(!ft){
			ab();
			ft = true;
		}
	})
});

gulp.task('browserSync',['nodemon'],function(){
	browserSync.init({
		proxy:{
			target:'http://127.0.0.1:16906'
		},
		files:['*'],
		port:9595,
		open:false
	})
})

//实现实时监听css到js
gulp.task('watcher',['browserSync','stylus','uglify'],function(){
	gulp.watch('./stylus/**/*.styl',['stylus']);
	gulp.watch('./public/js/**/*.js',['uglify']);
	
	gulp.watch([
		'./public/css/**/*.css',
		'./public/minjs/**/*.js'
	]).on('change',function(){
		reload();
	})
})

//gulp.task('logs',function(){
//	console.log('this is log')
//});
//
//gulp.task('es6',function(){
//	console.log('this is es6')
//});
//
//gulp.task('css',function(){
//	console.log('this is css')
//});
//
//gulp.task('all',['logs','es6','css'],function(){
//	console.log('this is all')
//});

//创建一个default任务
gulp.task('default',function(){
	console.log('this default')
});
