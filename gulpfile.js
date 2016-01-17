var gulp = require('gulp');
var gutil = require('gulp-util');
var changedInPlace = require('gulp-changed-in-place');
var mocha = require('gulp-mocha');


gulp.task('test', function() {
  gulp.src('src/**/*[sS]pec.js')
      .pipe(changedInPlace())
      .pipe(
         mocha({ reporter: 'spec' })
           .on('error', function() {}));
});

gulp.task('test-watch', function() {
  gulp.watch('src/**/*.js', ['test']);
});