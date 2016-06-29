// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

// File paths to various assets are defined here.
var PATHS = {
  javascript: [
    // Angular libs
    "public/js/vendor/angular.js",
    "public/js/vendor/angular-route.js",
    "public/js/vendor/angular-cookies.js",
    "public/js/vendor/angular-messages.js",
    "public/js/vendor/angular-animate.min.js",

    // jQuery libs & plugins
    "public/js/vendor/jquery-1.12.0.min.js",
    "public/js/vendor/underscore-min.js",

    // Angular dependencies & modules
    "public/js/app.js",
    "public/js/routes.js",

    // Controllers
    "public/js/controllers/layout-controller.js",

    //Directives

    //Factories
    "public/js/services/global-factory.js",

    
  ]
};

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('public/scss/main.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('public/css/'));
});

// Compile Our JS
gulp.task('js', function () {
    return gulp.src(PATHS.javascript)
        .pipe(concat('all.js'))
        .pipe(uglify({
            mangle: false
        }))
        .pipe(gulp.dest('public/js/'))
});

// Default Task
gulp.task('default', ['sass', 'js'], function() {
    // Watch Files For Changes
    gulp.watch('public/scss/**/*.scss', ['sass']);

    gulp.watch('public/js/**/*.js', ['js']);
});