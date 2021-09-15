# gulp-html-add - dervied from gulp-html-import
> A gulp plugin which can include .html files AND on-the-web HTML in other .html files

## Usage
First, install `gulp-html-add` as a devDependency:
```
npm install gulp-html-add --save-dev
```
Then add it to the `gulpfile.js`:
```
var htmlImport = require('gulp-html-add');

gulp.task('import', function () {
    gulp.src('./demo/index.html')
        .pipe(htmlImport('./demo/components/'))
        .pipe(gulp.dest('dist')); 
})
```

## Example
Here is the files tree:
```
|
-- demo
|   |
|   -- components
|   |    |
|   |    -- header.html
|   |    |
|   |    -- footer.html
|   |
|   -- index.html
|
-- gulpfile.js
```

HTML:
```
<!-- index.html -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>gulp-html-add Example</title>
</head>
<body>
    @import "header.html"
    <p>Hello World</p>
    @import "footer.html"
</body>
</html>
```

## Legal
For legal information, see LICENSE