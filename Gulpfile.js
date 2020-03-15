let gulp = require('gulp');
let concat = require("gulp-concat");
let sass = require('gulp-sass');
let cleanCss = require('gulp-clean-css');
let terser = require('gulp-terser');

gulp.task('js', function () {
  return gulp.src([
      'node_modules/angular/angular.min.js',
      'node_modules/@uirouter/angularjs/release/angular-ui-router.min.js',
      'node_modules/angular-animate/angular-animate.min.js',
      'node_modules/angular-touch/angular-touch.min.js',
      'node_modules/angular-resource/angular-resource.min.js',
      'node_modules/angular-simple-logger/dist/angular-simple-logger.min.js',
      'node_modules/ui-bootstrap4/dist/ui-bootstrap-tpls.js',
      'node_modules/leaflet/dist/leaflet.js',
      'node_modules/ui-leaflet/dist/ui-leaflet.js',
      'app/*.js',
      'app/**/**/*.js',
      'app/**/*.js'
    ])
    .pipe(terser())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('css', function () {
  return gulp.src([
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'node_modules/font-awesome/css/font-awesome.min.css',
      'node_modules/leaflet/dist/leaflet.css',
      'styles/*.scss',
    ])
    .pipe(sass())
    .pipe(cleanCss({compatibility: 'ie8'}))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./'));
});

gulp.task('fonts', function () {
  return gulp.src([
      'node_modules/font-awesome/fonts/*',
    ])
    .pipe(gulp.dest('fonts'));
});

gulp.task('build', gulp.series('js', 'css', 'fonts'));

gulp.task('default', gulp.series('build', function() {
  gulp.watch([
    'app/*.js',
    'app/**/**/*.js',
    'app/**/*.js'
  ], gulp.task('js'));

  gulp.watch([
    'styles/*.scss',
  ], gulp.task('css'));

  gulp.watch([
    'images/*',
  ], gulp.task('images'));
}));
