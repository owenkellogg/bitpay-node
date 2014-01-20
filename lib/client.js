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

Client.prototype.createInvoice = function(fn) {
  var options = new Object(this.httpOptions)
  options.method = "POST"
  options.url = "https://bitpay.com/api/invoice";
  request(options, function(err, resp, body) {
    result = JSON.parse(body);
    if (result.error) {
      fn(result.error, null);
    } else {
      fn(null, result);
    }
  })
}

module.exports =  Client

