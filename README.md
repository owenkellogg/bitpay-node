## Bitpay -- Bitcoin Payment Library for V8 Javascript

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

The call to createInvoice above should produce a JSON response as per the official
Bitpay API [documenation](https://bitpay.com/downloads/bitpayApi.pdf)

    { id: '2Rpei3aKcJZUDWDSJ92oSq',
      url: 'https://bitpay.com/invoice?id=2Rpei3aKcJZUDWDSJ92oSq',
      status: 'new',
      btcPrice: '0.0010',
      price: 0.001,
      currency: 'BTC',
      invoiceTime: 1390253166402,
      expirationTime: 1390254066402,
      currentTime: 1390253166452 }
    
## Tests

Run the tests wiith Mocha, and make sure to specify your Bitpay API Key in environment.
On the Bitpay account [API keys page](https://bitpay.com/api-keys) your can generate multiple API keys
for your various applications. Enable API key access and generate a key to use in the tests:

    BITPAY_API_KEY=46beb6dc657d4ceff4219a8e691b5015 mocha test/
