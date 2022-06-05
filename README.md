```javascript
var assert = require('assert')
var getVersions = require('commonform-get-versions')

getVersions(
  'commonform.org', // repository
  'kemitchell', // publisher
  'test', // project
  function (error, versions) {
    assert.ifError(error)
    assert.deepStrictEqual(versions, ['1.0.0'])
  }
)

getVersions(
  'commonform.org',
  'test',
  'nonexistent',
  function (error, versions) {
    assert.ifError(error)
    assert(versions === false)
  }
)
```
