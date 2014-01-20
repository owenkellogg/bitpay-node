var request = require('request')

function Client(options) {
  this._opts = options;
  this.httpOptions = {
    auth: {
      user: options.apiKey,
      pass: '',
      sendImmediately: true
    }
  } 
}

Client.prototype.createInvoice = function(opts, fn) {
  var options = new Object(this.httpOptions)
  options.method = "POST"
  options.url = "https://bitpay.com/api/invoice";
  options.form = {
    price: opts.price,
    currency: opts.currency
  };
  request(options, function(err, resp, body) {
    result = JSON.parse(body);
    if (result.error) {
      fn(result.error, null);
    } else {
      fn(null, result);
    }
  });
};

Client.prototype.getInvoice = function(invoiceId, fn) {
  var options = new Object(this.httpOptions);
  options.url = 'https://bitpay.com/api/invoice/'+invoiceId;
  console.log(options.url);
  options.methd = 'GET';
  request(options, function(err, resp, body) {
    console.log(err);
    console.log(body);
    result = JSON.parse(body);
    if (result.error) {
      fn(result.error, null);
    } else {
      fn(null, result);
    }
  });
};

module.exports =  Client

