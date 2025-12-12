
const http = require('http');

// URL is the first command line arg
const url = process.argv[2];

// Make an HTTP GET request
http.get(url, function (response) {
  // Convert response data from buffer to a string
  response.setEncoding('utf8');

  // Listen for data events and print each chunk
  response.on('data', function (data) {
    console.log(data);
  });

});