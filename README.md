```javascript
var assert = require('assert')
var getEditions = require('commonform-get-editions')

getEditions(
  'commonform.org', // repository
  'kemitchell', // publisher
  'test', // project
  function (error, editions) {
    assert.ifError(error)
    assert.deepStrictEqual(editions, ['1e'])
  }
)

getEditions(
  'commonform.org',
  'test',
  'nonexistent',
  function (error, editions) {
    assert.ifError(error)
    assert(editions === false)
  }
)
```
