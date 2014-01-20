var Bitpay = require('../bitpay');
var assert = require('assert');

describe('Bitpay.Client', function() {

  before(function() {
  });

  it('should fail to create an invoice with bad creds', function(done) {
    client = new Bitpay.Client({ apiKey: '1234567' });
    client.createInvoice({}, function(err, invoice){
      assert.equal(err.type, 'unauthorized');
      assert.equal(err.message, 'invalid api key');
      done();
    }); 
  });

  it('it should create a bitpay invoice', function(done) {
    var apiKey = process.env.BITPAY_API_KEY;
    if (apiKey) {
      client = new Bitpay.Client({ apiKey: apiKey });   
      client.createInvoice({ price: 0.001, currency: 'BTC' }, function(err, invoice) {
        assert(!!!err);
        assert.equal(invoice.price, 0.001);
        assert.equal(invoice.currency, 'BTC');
        assert.equal(invoice.btcPrice, '0.0010');
        assert.equal(invoice.status, 'new');
        done();
      });

    } else { 
      console.log('CONFIG: set ENV variable BITPAY_API_KEY and re-run test');
      assert(false); 
      done(); 
    }
  });

});

