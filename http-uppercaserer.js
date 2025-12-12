
const http = require('http');
const map = require('through2-map');

// Port number from command line argument
const port = Number(process.argv[2]);

const server = http.createServer(function (req, res) {
  // Only handle POST requests
  if (req.method !== 'POST') {
    return res.end('Only POST requests are supported\n');
  }

  // Pipe request body through a transform stream that uppercases text
  req.pipe(
    map(function (chunk) {
      return chunk.toString().toUpperCase();
    })
  ).pipe(res);
});

// Start listening on the port
server.listen(port);