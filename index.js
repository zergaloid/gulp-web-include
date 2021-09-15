const gutil = require('gulp-util')
const through = require('through2')
const request = require('sync-request');

const fs = require('fs')

module.exports = function (componentsUrl) {
	return through.obj(function (file, enc, cb) {
		if (file.isNull())
			return cb(null, file)

		if (file.isStream())
			return cb(new gutil.PluginError('gulp-html-import', 'Streaming not supported'))

		let data = file.contents.toString()
		data = data.replace(/@import\s"(.*)"/gi, (match, componentName) => {
			console.log('@import ' + componentName)
			return componentName.startsWith('https://') ? request('GET', componentName).getBody() :
				fs.readFileSync(componentsUrl + componentName, {
					encoding: 'utf8'
				})
		})

		file.contents = Buffer.from(data)
		file.path = gutil.replaceExtension(file.path, '.html')
		cb(null, file)
	})
}
