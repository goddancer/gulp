const gulp = require('gulp');

// gulp.src-base
// 例子：匹配 'client/js/**/**.js' 的 `base` 为 `client/js/`
gulp.src('js/1/*.js')
    .pipe(gulp.dest('./dist')); // 默认输出base为dist，所有单个js输出在dist文件夹内；等于base：'js/1'

gulp.src('js/1/*.js', { base: 'js' })
    .pipe(gulp.dest('./dist')); //  改变输出base为js，则输出到dist/1/；base为js，则1会被创建，保证相对目录结构
