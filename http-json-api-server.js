

const http = require('http');

// Port comes from the first argument
const port = Number(process.argv[2]);

// Build JSON for /api/parsetime
function parseTime(date) {
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  };
}

// Build JSON for /api/unixtime
function unixTime(date) {
  return { unixtime: date.getTime() };
}

const server = http.createServer(function (req, res) {
  // Only handle GET requests 
  if (req.method !== 'GET') {
    res.writeHead(405); // Method Not Allowed
    return res.end();
  }

  // Parse the URL and query string.
  // Need a base URL so just use a dummy host for parsing.
  const parsedUrl = new URL(req.url, 'http://localhost');

  // Get the 'iso' query value (string)
  const iso = parsedUrl.searchParams.get('iso');

  // If iso is missing, return a 400
  if (!iso) {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ error: 'Missing iso query parameter' }));
  }

  // Convert ISO string into a Date object
  const date = new Date(iso);

  let result;

  // Route based on pathname
  if (parsedUrl.pathname === '/api/parsetime') {
    result = parseTime(date);
  } else if (parsedUrl.pathname === '/api/unixtime') {
    result = unixTime(date);
  } else {
    // Unknown endpoint
    res.writeHead(404);
    return res.end();
  }

  // Send JSON response
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(result));
});

// Start listening
server.listen(port);