var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var minifyCSS = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('build', ['build:optimize-images', 'build:minify-css']);

gulp.task('build:optimize-images', function() {
    return gulp.src(['www/media/**/*.png', 'www/media/**/*.ico'])
               .pipe(imagemin())
               .pipe(gulp.dest('www/build/media'));
});

gulp.task('build:minify-css', function() {
    return gulp.src('www/media/css/main.css')
               .pipe(sourcemaps.init())
               .pipe(minifyCSS())
               .pipe(sourcemaps.write('./'))
               .pipe(gulp.dest('www/build/media/css'));
});
