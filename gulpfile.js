var gulp = require('gulp');

var imagemin = require('gulp-imagemin');
var minifyCSS = require('gulp-minify-css');
var RevAll = require('gulp-rev-all');
var sourcemaps = require('gulp-sourcemaps');

var buildDirectory = 'www/build/';

gulp.task('build', ['build:compress-assets', 'build:revision-assets']);

gulp.task('build:compress-assets', ['build:compress-css', 'build:compress-images']);

gulp.task('build:compress-css', function() {
    return gulp.src('www/media/**/*.css')
               .pipe(sourcemaps.init())
               .pipe(minifyCSS())
               .pipe(sourcemaps.write('./'))
               .pipe(gulp.dest(buildDirectory + 'media'));
});

gulp.task('build:compress-images', function() {
    return gulp.src(['www/media/**/*.png', 'www/media/**/*.ico'])
               .pipe(imagemin())
               .pipe(gulp.dest(buildDirectory + 'media'));
});

gulp.task('build:copy-index', function() {
    return gulp.src('www/index.html')
               .pipe(gulp.dest(buildDirectory));
});

gulp.task('build:revision-assets', ['build:compress-assets', 'build:copy-index'], function() {
    var revAll = new RevAll({ dontRenameFile: ['.html'] });
    return gulp.src(buildDirectory + '**')
               .pipe(revAll.revision())
               .pipe(gulp.dest(buildDirectory))
});
