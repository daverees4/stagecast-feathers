'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('videos service', function() {
  it('registered the videos service', () => {
    assert.ok(app.service('videos'));
  });
});
