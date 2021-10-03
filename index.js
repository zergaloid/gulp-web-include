const gutil = require('gulp-util')
const through = require('through2')
const request = require('sync-request');

const fs = require('fs')

module.exports = function (componentsUrl) {
	return through.obj(function (file, enc, cb) {

		if (file.isNull())
			return cb(null, file)

		if (file.isStream())
			return cb(new gutil.PluginError('gulp-web-include', 'Streaming not supported'))

		let data = file.contents.toString()
		let newData = data.replace(/@include\s."(.*\.(.*))"./gi, (match, componentName, componentExtension) => {
			console.log(`@include ${componentExtension} ${componentName} ${componentsUrl}`)
			return componentName.startsWith('https://') ? request('GET', componentName).getBody() :
				fs.readFileSync(componentsUrl + componentName, {
					encoding: 'utf8'
				})
		})
		data = newData ?? data

		file.contents = Buffer.from(data)
		return cb(null, file)
	})
}
