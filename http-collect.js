
const http = require('http');

// URL is the first argument
const url = process.argv[2];

// Make an HTTP GET request
http.get(url, function (response) {
  response.setEncoding('utf8');

  let fullData = '';

  // Collect data chunks
  response.on('data', function (chunk) {
    fullData += chunk;
  });

  // When all data has been received
  response.on('end', function () {
    // Print number of characters
    console.log(fullData.length);

    // Print the complete response
    console.log(fullData);
  });

});