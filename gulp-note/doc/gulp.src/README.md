# Gulp.src

```javascript
const map = require('map-stream');
const vfs = require('vinyl-fs');

let log = function(file, cb) {
    console.log(file.path);
    console.log(file.contents);
    cb(null, file);
};

vfs.src(['./js/**/*.js', '!./js/vendor/*.js'], {
    buffer: true, // Boolean(true);是否缓存file.contents到内存
    read: true, // Boolean(true);设置为false将使file.contents = null并禁止通过.dest（）将文件写入磁盘
    since: new Date('2018-09-05 10:00').getTime(), // Date or Number;指定日期以后的修改才会被流更改
    removeBOM: true, // Boolean(true);由于在UTF-8编码文件上删除BOM。如果由于某种原因需要BOM，则设置为false
    sourcemaps: true, // Boolean(false)
    resolveSymlinks: true, // Boolean(true);是否以递归方式将符号链接解析为其目标。设置为false以将它们保存为符号链接，并使file.symlink等于原始符号链接的目标路径
    dot: false, // Boolean(false);是否希望globs匹配点文件（例如.gitignore）
})
    .pipe(map(log))
    .pipe(vfs.dest('./dist', {
        cwd: process.cwd(), // String(process.cwd());文件夹相对的工作目录
        //mode: 2, // 生成文件的模式；don't-know
        //dirMode: undefined, // Number;创建目录的模式don't-know
        overwrite: true, // Boolean(true);是否重写同路径同名文件
        append: false, // Boolean(false);是否采用在现有文件内容后面追加新的数据的方式
        sourcemaps: true, // Boolean or String;true='.';对通过流传递的文件启用源映射支持。如果指定为true，将写入内联soucemaps。指定String路径将在给定路径上写入外部源图
        relativeSymlinks: false, // Boolean(false);创建符号链接时，创建的符号链接是否应该是相对的。如果为false，则符号链接将是绝对的。
        useJunctions: true, // Boolean(true);创建符号链接时，是否应将目录符号链接创建为联结。此选项仅在Windows上相关，在其他位置忽略。
    }));
```

