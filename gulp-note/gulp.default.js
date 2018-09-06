const gulp = require('gulp');
const uglify = require('gulp-uglify');

// gulp.dest
// 文件流可以导出多次
gulp.src('./js/1/*.js')
    .pipe(gulp.dest('./dist/dev'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/pub'));