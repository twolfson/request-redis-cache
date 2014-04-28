// Load in our dependencies
var redisUtils = require('./utils/redis');
var RequestRedisCache = require('../');

// Start tests
describe('A RequestRedisCache', function () {
  redisUtils.run();

  describe.skip('fetching fresh data', function () {
    it('does not have any errors', function () {

    });

    it('retrieves our data', function () {

    });

    describe.skip('when fetched again', function () {
      it('does not double request', function () {

      });

      it('retrieves our data', function () {

      });
    });
  });

  describe.skip('with expired data', function () {
    describe('when requested', function () {
      it('retrieves our data', function () {

      });

      it('grabs the fresh data', function () {

      });
    });
  });
});

// Edge cases for verifying we handle errors nicely
describe.skip('A RequestRedisCache retrieving from a downed redis instance', function () {
  it('callsback with a descriptive error', function () {

  });
});

describe.skip('A RequestRedisCache with malformed data', function () {
  it('invalidates the cached data', function () {

  });

  it('grabs fresh data', function () {

  });
});

// DEV: This verifies `redis.get` and `redis.setex` degrades nicely
// TODO: We cannot think of a test case for verifying error handling with `del`
describe.skip('A RequestRedisCache caching fresh data with a bad key', function () {
  it('emits an error about the get from cache', function () {

  });

  it('emits an error about the set to cache', function () {

  });

  it('returns fresh data', function () {

  });
});
