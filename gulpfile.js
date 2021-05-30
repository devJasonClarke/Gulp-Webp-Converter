const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const webp = require("imagemin-webp");
const extReplace = require("gulp-ext-replace");

gulp.task("exportWebP", function() {
  let jpg = "images/*.jpg"; // Where your PNGs are coming from.
  let png = "images/*.png"; // Where your PNGs are coming from.
  let dest = "webp"; // Where your WebPs are going.

  return gulp.src(jpg)
    .pipe(imagemin([
      webp({
        quality: 75
      })
    ]))
    .pipe(extReplace(".webp"))
    .pipe(gulp.dest(dest));
});
