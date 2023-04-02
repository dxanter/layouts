const gulp = require('gulp');
const browserSync = require('browser-sync').create();

function watch() {
    browserSync.init({
        server: {
           baseDir: "./",
           notify: false
        }
    });
    gulp.watch('./*.html').on('change',browserSync.reload);
    gulp.watch('./css/*.css').on('change',browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.default = watch;