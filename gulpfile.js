const gulp = require( 'gulp' );
const sass = require( 'gulp-sass' )(require( 'sass' ));
const notify = require( 'gulp-notify' );
const plumber = require( 'gulp-plumber' );
const pug = require( 'gulp-pug' );
const autoprefixer = require( 'gulp-autoprefixer' );
const uglify = require( 'gulp-uglify' );
const browserSync = require( 'browser-sync' );

const paths = {
    'root': './dest/',
    'pug' : './src/pug/**/*.pug',
    'html': './dest/**/*.html',
    'scss': './src/scss/**/*.scss',
    'css' : './dest/src/css/',
    'jsSrc': './src/js/**/*.js',
    'js'  : './dest/src/js/',
    'imgSrc' : './src/img/**/*',
    'img' : './dest/src/img/'
};

const { watch, series, task, src, dest, parallel } = require( 'gulp' );

// sass
task( 'sass', function() {
    return (
        src( paths.scss )
            .pipe( plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }) )
            .pipe( sass({
                outputStyle: 'expanded'
            }) )
            .pipe( autoprefixer({
                cascade: false,
                grid: true
            }) )
            .pipe( dest( paths.css ) )
    );
} );

// pug
task( 'pug', function() {
    return (
        src([ paths.pug, '!./src/pug/**/_*.pug' ])
            .pipe( plumber({ errorHandler: notify.onError( 'Error: <%= error.message %>' ) }) )
            .pipe( pug({
                pretty: true,
                basedir: './src/pug'
            }) )
            .pipe( dest(paths.root) )
    );
} );

// JS
task( 'js', function() {
    return (
        src( paths.jsSrc )
            .pipe( plumber() )
            .pipe( uglify() )
            .pipe( dest( paths.js ) )
    );
} );


// img
task( 'img', function() {
    return (
        src( paths.imgSrc )
            .pipe( dest( paths.img ) )
    );
} );

// browser
task( 'browser-sync', () => {
    return browserSync.init({
        server: {
            baseDir: paths.root
        },
        port: 10010,
        reloadOnRestart: true
    });
} );

// reload
task( 'reload', (done) => {
   browserSync.reload();
   done(); 
} );


// watch
task( 'watch', done => {
    watch([paths.scss], series( 'sass', 'reload' ));
    watch([paths.jsSrc], series('js', 'reload'));
    watch([paths.pug], series('pug', 'reload'));
    watch([paths.imgSrc], series('img', 'reload'));
    done();
} );

task( 'default', parallel( 'watch', 'browser-sync' ) );

