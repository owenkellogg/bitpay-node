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
  this.baseUrl = "https://bitpay.com";
  var envs = ["dev", "development", "test"];
  if(envs.indexOf(options.environment) > -1) {
    this.baseUrl = "https://test.bitpay.com";
  }
}

Client.prototype.createInvoice = function(opts, fn) {
  var options = new Object(this.httpOptions)
  options.method = "POST"
  options.url = this.baseUrl+"/api/invoice";
  console.log(options.url);
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
  options.url = this.baseUrl+'/api/invoice/'+invoiceId;
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

