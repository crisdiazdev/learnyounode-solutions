
const http = require('http');

const results = [];      // store full response strings by index
let completed = 0;       // how many requests have finished

 // Fetch the full response from a URL and store it in results[index].
 // When done, check if all 3 are complete; if yes, print in order.

function fetchUrl(index, url) {
  http.get(url, function (response) {
    response.setEncoding('utf8');

    let fullData = '';

    response.on('data', function (chunk) {
      fullData += chunk;
    });

    response.on('end', function () {
      results[index] = fullData;
      completed++;

      // Only when all 3 requests are complete do we print output
      if (completed === 3) {
        for (let i = 0; i < 3; i++) {
          console.log(results[i]);
        }
      }
    });

    response.on('error', function (err) {
      console.error(err);
    });
  }).on('error', function (err) {
    // Handles errors from the http.get request itself
    console.error(err);
  });
}

// The three URLs are the first three command line arguments after node/file
for (let i = 0; i < 3; i++) {
  fetchUrl(i, process.argv[i + 2]);
}