var
  gulp = require('gulp'),
  debug = require('gulp-debug'),
  less = require('gulp-less'),
  watchLess = require('gulp-watch-less'),
  uglifycss = require('gulp-uglifycss');

gulp.task('dev-watch', ['less'], function () {
  watchLess('less/app.less')
    .pipe(debug())
    .pipe(less())
    .pipe(gulp.dest('static/css'))
});

gulp.task('less', function () {
  return gulp.src('less/app.less')
    .pipe(less())
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('static/css'))
});