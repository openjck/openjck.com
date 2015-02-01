var gulp = require('gulp');
var favicons = require('gulp-favicons');
var del = require('del');

gulp.task('copy', function () {
    return gulp.src('www/index.html')
        .pipe(gulp.dest('.tmp/'));
})

gulp.task('favicons', ['copy'], function() {
    return gulp.src('.tmp/index.html')
        .pipe(favicons({
            files: {
                dest: 'media/icons/'
            }
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('default', ['favicons'], function () {
    del('.tmp');
});
