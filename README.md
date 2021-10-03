# gulp-web-include - dervied from gulp-html-import
> A gulp plugin which can include .html files AND on-the-web HTML in other .html files

## Usage
First, install `gulp-web-include` as a devDependency:
```
npm install gulp-web-include --save-dev
```
Then add it to the `gulpfile.js`:
```
var includer = require('gulp-web-include');

gulp.task('import', function () {
    gulp.src(<file to include into>)
        .pipe(includer(<path to components>, <>))
        .pipe(gulp.dest('dist')); 
})
```

## Legal
For legal information, see LICENSE

This project has been derived from another project, so the LICENSE file was changed accordingly, the original license is preserved