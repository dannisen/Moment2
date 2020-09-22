const { src, dest, watch, series, parallel } = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const browserSync = require("browser-sync").create();

// Sökvägar
const files = {
    htmlPath: "src/**/*.html", // Ex. alla filer med ändelsen .html
    jsPath: "src/**/*.js",
    cssPath: "src/**/*.css",
    imgPath: "src/images/*"
}

// Kopierar HTML-filer och lägger dom i pub-mappen
function copyHTML() {
    return src(files.htmlPath)
        .pipe(dest('pub')
        );
}

// Sammanslår och minifierar JS-filer och lägger dom i pub-mappen
function jsTask() {
    return src(files.jsPath)
        .pipe(concat('main.js')) 
        .pipe(uglify())
        .pipe(dest('pub/js')
        );
}

// Sammanslår och minifierar CSS-filer och lägger dom i pub-mappen
function cssTask() {
    return src(files.cssPath)
        .pipe(concat('style.css'))
        .pipe(cleanCSS({ debug: true }, (details) => {
            console.log(`${details.name}: ${details.stats.originalSize}`);
            console.log(`${details.name}: ${details.stats.minifiedSize}`);
        }))
        .pipe(dest('pub/css')
        );
}

// Minifierar bilder och lägger dom i pub-mappen
function imgTask() {
    return src(files.imgPath)
        .pipe(imagemin())
        .pipe(dest('pub/images')
        );
}

// Watcher, kör tasks när ändringar görs 
function watchTask() {
    // Skapar en live-server
    browserSync.init({
        injectChanges: false,
        server: {
            baseDir: "./pub"
        }
    });
    watch([files.htmlPath, files.jsPath, files.cssPath, files.imgPath],
        parallel(copyHTML, jsTask, cssTask, imgTask)).on('change', browserSync.reload);
}

// Default task
exports.default = series(
    parallel(copyHTML, jsTask, cssTask, imgTask),
    watchTask
);