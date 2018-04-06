'use strict';

const expect = require('chai').expect;
const palette = require('../palette.js');

describe('#palette', function() {
    it('should be typed as undefined"', function() {
        var result = palette('red', 'message');

        expect(result).to.be.an('undefined');
      });
      it('should be typed as undefined"', function() {
        var result = palette('yellow', 'message');

        expect(result).to.be.an('undefined');
      });
      it('should be typed as undefined"', function() {
        var result = palette('green', 'message');

        expect(result).to.be.an('undefined');
      });
      it('should be typed as undefined"', function() {
        var result = palette('blue', 'message');

        expect(result).to.be.an('undefined');
      });
      it('should be typed as undefined"', function() {
        var result = palette('purple', 'message');

        expect(result).to.be.an('undefined');
      });
});