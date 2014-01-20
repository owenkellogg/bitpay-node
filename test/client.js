var Bitpay = require('../bitpay');
var assert = require('assert');

describe('Bitpay.Client', function() {

  before(function() {
    client = new Bitpay.Client({ apiKey: '1234567' });
  });

  it('should fail to create an invoice with bad creds', function(done) {
    client.createInvoice(function(err, invoice){
      assert.equal(err.type, 'unauthorized');
      assert.equal(err.message, 'invalid api key');
      done();
    }); 
  });

});

