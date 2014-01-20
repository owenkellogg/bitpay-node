var Bitpay = require("../bitpay.js");
var assert = require('assert');

describe('Bitpay', function() {
  before(function(){
    apiKey = 'someAp!k3y';
  });

  it('should have a Client constructor', function() {
    var client = new Bitpay.Client({ apiKey: apiKey });  
    assert.equal(client._opts.apiKey, apiKey);
  });

  it('should have an Invoice constructor', function() {
    var invoice = new Bitpay.Invoice();  
    assert((typeof invoice._opts) == 'object');
  });

  it('should have a Listener constructor', function() {
    var listener = new Bitpay.Listener();  
    assert((typeof listener._opts) == 'object');
  });

});

