```javascript
var assert = require('assert')
var getEditions = require('commonform-get-editions')

getEditions(
  'api.commonform.org', // repository
  'test', // publisher
  'test', // project
  function (error, editions) {
    assert.ifError(error)
    assert.deepStrictEqual(editions, ['1e'])
  }
)

getEditions(
  'api.commonform.org',
  'test',
  'nonexistent',
  function (error, editions) {
    assert(error)
    assert.equal(error.statusCode, 404)
  }
)
```
