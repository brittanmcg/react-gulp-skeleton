var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');


gulp.task('default', function(){
   var bundler = watchify(browserify({
       entries: ['./src/app.jsx'],
       transform: [reactify],
       extensions: ['.jsx'],
       debug: true,
       cache: {},
       packageCache: {},
       fullPaths: true
   }));

    function build(file){
        if(file) gutil.log('Recompiling ' + file);
        return bundler
            .bundle()
            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
            .pipe(source('main.js'))
            .pipe(gulp.dest('./'));
    };
  build();
  bundler.on('update', build);
});

//gulp.task('default', function () {
//    return gulp.src('src/**') // grabs all files within the src directory
//    .pipe(react()) // uses gulp-react plugin to convert jsx into javascript
//    .pipe(concat('application.js')) // combine all files into application.js
//    .pipe(gulp.dest('./')) // save in current project directory
//});