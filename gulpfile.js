const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
// const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');


// Versão otimizada da função styles que inclui sourcemaps e minificação
function styles() {
    return gulp.src('./src/scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed',
            includePaths: ['./src/img']  // Permite que o Sass encontre as imagens
        }).on('error', sass.logError))
        .pipe(cleanCSS({
            rebaseTo: './dist/css'  // Corrige caminhos relativos no CSS final
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist/css'));
}

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
}

function copyImages() {
    return gulp.src('./src/img/**/*')
        .pipe(gulp.dest('./dist/img'));
}

// function images() {
//   return gulp.src('./src/img/**/*')
//     .pipe(imagemin([
//       imagemin.mozjpeg({ quality: 80, progressive: true }), // Ajuste a qualidade conforme necessário
//       imagemin.optipng({ optimizationLevel: 3 }), // Nível 3 é um equilíbrio entre tamanho e qualidade
//       imagemin.svgo(), // Otimização para SVG
//     ]))
//     .pipe(gulp.dest('./dist/img'));
// }

// Tarefa de watch
function watch() {
    gulp.watch('./src/scss/**/*.scss', styles);
    gulp.watch('./src/scripts/*.js', scripts);
    // gulp.watch('./src/img/**/*', images);
}

function html() {
  return gulp.src('./index.html')
    .pipe(gulp.dest('./dist'));
}

// Exportações
exports.styles = styles;
exports.scripts = scripts;
// exports.images = images;
exports.watch = watch;

exports.default = gulp.parallel(styles, scripts, copyImages, watch, html);