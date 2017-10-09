const gulp = require("gulp");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat")
const minify = require("gulp-minify-css");
const webServer = require("gulp-webserver");


gulp.task("miniJs",function(){
	gulp.src("./js/*.js")
	    .pipe(concat("main.js"))
	    .pipe(uglify())
	    .pipe(gulp.dest("./js"));
})
gulp.task("miniCss",function(){
	gulp.src("./css/*.css")
	    .pipe(concat("main.css"))
	    .pipe(minify())
	    .pipe(gulp.dest("./css"));
})
gulp.task("server",function(){
	 gulp.src("./js/mian.js")
	     .pipe(webServer({
	     	port:8080,
	     	livereload:true,
	     	directoryListing:{
	     	    path:"./",
	     	    enable:true
	     	}
	     }))
})