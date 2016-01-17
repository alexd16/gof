var gulp = require('gulp');
var gutil = require('gulp-util');
var changedInPlace = require('gulp-changed-in-place');
var changed = require('gulp-changed');
var mocha = require('gulp-mocha');
var babel = require('gulp-babel');
var del = require('del');
var runSequence = require('run-sequence');

var src = 'src/**/*.js';
var dest = 'build'


gulp.task('clean', function() {
  return del([dest]);  
});

gulp.task('build', function() {
  runSequence('clean', 'compile')
});

gulp.task('compile', function() {
  return gulp
          .src(src)
          .pipe(changed(dest))
          .pipe(babel({presets: ['es2015']}))
          .pipe(gulp.dest('build'));
});

gulp.task('test', ['compile'], function() {
  return gulp
          .src(dest+'/**/*[sS]pec.js')
          .pipe(
            mocha({ reporter: 'spec' }).on('error', function() {}));
});

gulp.task('test-watch', function() {
  gulp.watch(src, ['test']);
});