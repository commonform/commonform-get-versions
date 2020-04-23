var concat = require('simple-concat')
var https = require('https')
var once = require('once')
var parse = require('json-parse-errback')

module.exports = function (repository, publisher, project, callback) {
  callback = once(callback)
  https.request({
    host: repository,
    path: (
      '/' + encodeURIComponent(publisher) +
      '/' + encodeURIComponent(project) +
      '/index.json'
    )
  })
    .once('error', callback)
    .once('timeout', callback)
    .once('response', function (response) {
      var statusCode = response.statusCode
      if (statusCode === 404) return callback(null, false)
      if (statusCode !== 200) {
        var statusError = new Error()
        statusError.statusCode = statusCode
        return callback(statusError)
      }
      concat(response, function (error, buffer) {
        if (error) return callback(error)
        parse(buffer, function (error, parsed) {
          if (error) return callback(error)
          callback(null, parsed.editions)
        })
      })
    })
    .end()
}
