var fs = require('fs');

var gulp = require("gulp");
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var ejs = require('gulp-ejs');
var rename = require('gulp-rename');
var babel = require('gulp-babel');

var cashClearTime = new Date().getTime();

var ejsMain = [
    {
        title: 'KidsQ',
        fileName: 'index'
    },
    {
        title: 'とは',
        fileName: 'about',
        js: ''
    },
    {
        title: 'クイズ',
        fileName: 'quiz',
        js: [
        'modal'
        ]
    }
];

gulp.task('ejs', function () {
    return ejsMain.forEach(function (file, ejsMainIndex) {
        gulp.src(['src/ejs/layout.ejs'])
            .pipe(ejs({
                fileData: file,
                cashClearQuery: cashClearTime
            }))
            .pipe(rename('main/' + file.fileName + '.php'))
            .pipe(gulp.dest('build'));
    });
});
gulp.task('less', function () {
    return gulp.src('src/less/*.less')
            .pipe(less())
            .pipe(gulp.dest('build/css'));
});
gulp.task('js', function () {
    return gulp.src('src/js/*.js')
            .pipe(babel())
            .pipe(gulp.dest('build/js'));
});
gulp.task('mock', function () {
    return gulp.src('src/ejs/mock.ejs')
            .pipe(ejs({fileData: ejsMain}, null, {ext: '.html'}))
            .pipe(gulp.dest('build'));
});
gulp.task('lib', function () {
   gulp.src('src/lib/*').pipe(gulp.dest('build/lib')); 
});
gulp.task('watch', function () {
    gulp.watch(['src/ejs/*.ejs', 'src/ejs/main/*.ejs'], ['ejs', 'mock']);
    gulp.watch(['src/less/*.less'], ['less']);
    gulp.watch(['src/js/*.js'], ['js']);
});
gulp.task('clean', function () {
    gulp.src('build/*').pipe(clean());
});

gulp.task('default', function () {
   console.log('hell gulp'); 
});
