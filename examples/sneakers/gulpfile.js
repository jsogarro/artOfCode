'use strict';

//
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

// Paths to our files
var scripts = 'public/scripts/*.js';
var concatFiles = [
    'public/scripts/sneaker.js',
    'public/scripts/main.js'
];

// Lint our code
gulp.task('jshint', function() {
    return gulp.src(scripts)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

// Concat process for final distribution
gulp.task('concat-dist', function() {
  return gulp.src(concatFiles)
    .pipe(concat('manifest.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/dist/'));
});

// Local concat process
gulp.task('concat-dev', function() {
  return gulp.src(concatFiles)
    .pipe(concat('manifest.js'))
    .pipe(gulp.dest('public/dist/'));
});

// Minify your code
gulp.task('minify', function() {
  return gulp.src('public/dist/manifest.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

// Watch for file changes
gulp.task('watch', function() {
    gulp.watch(scripts, ['jshint']);
    gulp.watch(concatFiles, ['concat-dev']);
});

// Development task
gulp.task('default', ['watch', 'jshint', 'concat-dev']);

// Deployment task
gulp.task('deploy', ['jshint', 'concat-dist']);
