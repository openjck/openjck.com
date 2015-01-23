var gulp = require('gulp');
var favicons = require('gulp-favicons');

gulp.task('default', ['favicons']);

gulp.task('favicons', function() {
    gulp.src('www/index.html')
        .pipe(favicons({
            files: {
                src: 'www/media/img/noise.png',
                dest: 'media/icons/'
            }
        }))
        .pipe(gulp.dest('./'));
});
