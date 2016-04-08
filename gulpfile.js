var gulp = require('gulp');
var jshint = require('gulp-jshint');
var argv = require('yargs').argv;

gulp.task('jslint', function(){
  return gulp.src(argv.f)
    .pipe( jshint({ esversion: 6, asi: true }) )
    .pipe( jshint.reporter('jshint-stylish') )
    ;
});
