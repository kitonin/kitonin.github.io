var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concatCSS = require('gulp-concat-css');
var plumber = require('gulp-plumber');
var pug = require('gulp-pug');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

  browserSync.init({
    server: "src/"
  });
  // Следим за изменениями
  gulp.watch("src/scss/*.scss", ['sass']);
  gulp.watch("src/pug/*.pug").on('change', browserSync.reload);
  gulp.watch("src/js/*.js").on('change', browserSync.reload);
  gulp.watch("src/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  gulp.src("src/scss/*.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 10 versions'],
      cascade: false
    }))
    .pipe(concatCSS('style.css'))
    .pipe(plumber.stop())
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
});

gulp.task('pug', function buildHTML() {
  return gulp.src('src/*.pug')
  .pipe(plumber())
  .pipe(plumber.stop())
  .pipe(pug())
  .pipe(gulp.dest('src'))
  .pipe(browserSync.stream());
});


gulp.task('default', ['serve', 'pug']);