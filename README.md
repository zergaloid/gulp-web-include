# gulp-web-include - dervied from gulp-html-import

## Usage
First, install `gulp-web-include` as a devDependency:
```
npm install gulp-web-include --save-dev
```
Then add it to the `gulpfile.js`:
```
var importer = require('gulp-web-include');

gulp.task('import', function () {
    gulp.src('./demo/index.html')
        .pipe(importer('./demo/components/', "html"))
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
    <title>gulp-web-include Example</title>
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
