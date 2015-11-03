var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('build', ['build:optimize-images']);

gulp.task('build:optimize-images', function() {
    return gulp.src(['www/media/**/*.png', 'www/media/**/*.ico'])
               .pipe(imagemin())
               .pipe(gulp.dest('www/build/media'));
});
