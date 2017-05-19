var fs = require('fs');

var gulp = require("gulp");
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var less = require('gulp-less');

gulp.task('php', function () {
    return gulp.src('src/php/index.php')
            .pipe(gulp.dest('build'));
});
gulp.task('less', function () {
    return gulp.src('src/less/common.less')
            .pipe(less())
            .pipe(gulp.dest('build/css'));
});

gulp.task('default', function () {
   console.log('hell gulp'); 
});