## bitpay-node

### Bitcoin Payment Library for V8 Javascript

I want a simple way to use the Bitpay Bitcoin API in node.js, 
and npm -- Node Package Manager -- is the standard way to distribute
javascript libraries for Node.js.

Like other HTTP client libraries a `Client` object will manage authentication
and connection to Bitpay's servers. All requests to the API will ultimately be 
made using the Client object initialized with the Bitpay account credentials.

## Installation

    npm install bitpay-node

## Example

    var Bitpay = require('bitpay-node');
    
    client = new Bitpay.Client({ apiKey: process.env.BITPAY_API_KEY });
    
    client.createInvoice({ price: 0.001, currency: 'BTC' }, function(err, invoice) {
      console.log(invoice);
    })
    
## Tests

Run the tests wiith Mocha

    mocha test/
