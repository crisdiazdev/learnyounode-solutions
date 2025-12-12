

// Load the Node filesystem
const fs = require('fs');

// File path is the first command line arg
const filepath = process.argv[2];

// Read the file contents 
const filecontents = fs.readFileSync(filepath);

// Convert the buffer to a string
const filestring = filecontents.toString();

// Split the string by newline chars
const lines = filestring.split('\n');

// The number of newlines is one less than the total lines
console.log(lines.length - 1);