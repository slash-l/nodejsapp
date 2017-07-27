var gulp = require('gulp');
// 在 shell 中执行一个命令
var exec = require('child_process').exec;

gulp.task('default', function(cb) {
    // 将你的默认的任务代码放在这
    console.log('webpack starting');
    exec('webpack', function(err) {
        if (err) return cb(err);
        console.log('webpack end...');
        cb();
    })
});

