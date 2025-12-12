
const http = require('http');
const fs = require('fs');

// Port number comes from first argument
const port = Number(process.argv[2]);

// File path to serve comes from second argument
const filePath = process.argv[3];

// Create the HTTP server
const server = http.createServer(function (req, res) {
  // Set HTTP status code and headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Create a readable stream from the file and pipe it to the response
  fs.createReadStream(filePath).pipe(res);
});

// Start listening on the port
server.listen(port);