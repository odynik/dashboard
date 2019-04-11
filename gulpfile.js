const gulp = require('gulp');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const del = require('del');

const scripts = require('./scripts');
const styles = require('./styles');

// Some pointless comments for our project.

var devMode = false;

/*function css(){
    return gulp
        .src(styles)
        .pipe(concat('main.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
}

function js() {
    return gulp
        .src(scripts)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.stream());
}

function html() {
    return gulp
        .src('./src/templates/!**!/!*.html')
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.stream());
}

function reload(){
    browserSync.reload();
}

function watch(){

}*/
gulp.task('css', function() {
    return gulp
        .src(styles)
        .pipe(concat('main.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
});

gulp.task('js', function() {
    return gulp
        .src(scripts)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.stream());
});

gulp.task('html', function() {
    return gulp
        .src('./src/templates/**/*.html')
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.stream());
});

gulp.task('browser_sync', function() {
    browserSync.init({
/*        watch: true,*/
        server: {
            baseDir: './dist',
        }

    });
});

gulp.task('browser_reload', function(done) {
    browserSync.reload();
    done();
});

gulp.task('watchFiles', function() {
    gulp.watch('./src/css/**/*.css', gulp.series('css'));
    gulp.watch('./src/js/**/*.js', gulp.series('js'));
    gulp.watch('./src/templates/**/*.html', gulp.series('html'));
});

gulp.task('clean', function() {
    return del(['./dist']);
});

gulp.task('clean_build', gulp.series('clean',gulp.parallel('css', 'js', 'html')));
gulp.task('build', gulp.parallel('css', 'js', 'html'));
gulp.task('watch', gulp.parallel('watchFiles', 'browser_sync'));

gulp.task('dev', gulp.series('build', 'watch'), function() {
    devMode = true;
});
