var gulp = require('gulp')
var gutil = require('gulp-util')
var browserSync = require('browser-sync').create();

gulp.task('css', function() {
  gulp.src('css/*')
    .pipe(browserSync.stream());
});

gulp.task('watch', function() {

  browserSync.init({
      server: "./"
  });

  gulp.watch('css/*', ["css"]);
  gulp.watch('js/*').on('change', browserSync.reload);;
  gulp.watch('data/*').on('change', browserSync.reload);;
  gulp.watch(['*.html', 'templates/*']).on('change', browserSync.reload);;
});


gulp.task('default', ['watch']);