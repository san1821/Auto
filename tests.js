var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      const doesContain = [1,2,3].indexOf(4)
      assert.equal(doesContain, -1);
      results.push({
        testPassed: (doesContain === -1) ? false : true,
        msg: 'Array contains'
      })
    });
  });
});

function onData(result, expectedResult, res, resolve) {
  
}