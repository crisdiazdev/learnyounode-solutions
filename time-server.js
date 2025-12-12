
const net = require('net');

// Port number comes from the first argument
const port = Number(process.argv[2]);

// Zero fill a number to 2 digits,  ex. 7 - > 07
function pad2(n) {
  return String(n).padStart(2, '0');
}

// Format the current date in "YYYY-MM-DD hh:mm"
function formatDate(d) {
  const year = d.getFullYear();
  const month = pad2(d.getMonth() + 1); // getMonth() is 0-based
  const day = pad2(d.getDate());
  const hour = pad2(d.getHours());
  const minute = pad2(d.getMinutes());

  return `${year}-${month}-${day} ${hour}:${minute}`;
}

// Create the TCP server
const server = net.createServer(function (socket) {
  // Build the time string with a newline at the end
  const now = formatDate(new Date()) + '\n';

  // Write to the socket and close the connection
  socket.end(now);
});

// Start listening on the port
server.listen(port);