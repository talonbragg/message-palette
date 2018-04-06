'use strict';

const expect = require('chai').expect;
const palette = require('../palette.js');

describe('#palette', function() {
    it('should not equal "string"', function() {
        var result = palette('green', 'message');

        expect(result).to.be.an('undefined');
      });
});