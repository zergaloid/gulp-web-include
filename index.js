const gutil = require('gulp-util')
const through = require('through2')
const request = require('sync-request');

const fs = require('fs')

module.exports = function (componentsUrl, extension) {
	return through.obj(function (file, enc, cb) {
		if (file.isNull())
			return cb(null, file)

		if (file.isStream())
			return cb(new gutil.PluginError('gulp-web-include', 'Streaming not supported'))

		let data = file.contents.toString()
		data = data.replace(/@include\s"(.*\.(.*))"/gi, (match, componentName, componentExtension) => {
			console.log('@include ' + componentExtension + componentName)
			return componentName.startsWith('https://') ? request('GET', componentName).getBody() :
				fs.readFileSync(componentsUrl + componentName, {
					encoding: 'utf8'
				})
		})

		file.contents = Buffer.from(data)
		file.path = gutil.replaceExtension(file.path, extension)
		return cb(null, file)
	})
}
