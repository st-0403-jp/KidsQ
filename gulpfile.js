var fs = require('fs');

var gulp = require("gulp");
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var ejs = require('gulp-ejs');
var rename = require('gulp-rename');

var ejsMain = [
    {
        title: 'トップ',
        fileName: 'index'
    },
    {
        title: 'とは',
        fileName: 'about'
    }
];

var ejsData = {
    data: 'ejsejsejs'
};

gulp.task('ejs', function () {
    return ejsMain.forEach(function (file, ejsMainIndex) {
        gulp.src(['src/ejs/layout.ejs'])
            .pipe(ejs({
                file: file.fileName,
                title: file.title
            }))
            .pipe(rename('main/' + file.fileName + '.php'))
            .pipe(gulp.dest('build'));
    });
});
gulp.task('less', function () {
    return gulp.src('src/less/common.less')
            .pipe(less())
            .pipe(gulp.dest('build/css'));
});
gulp.task('watch', function () {
    gulp.watch(['src/ejs/*.ejs'], ['ejs']);
    gulp.watch(['src/less/*.less'], ['less']);
});
gulp.task('clean', function () {
    gulp.src('build/*').pipe(clean());
});
gulp.task('lib', function () {
   gulp.src('src/lib/*').pipe(gulp.dest('build/lib')); 
});

gulp.task('default', function () {
   console.log('hell gulp'); 
});