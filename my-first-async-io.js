const fs = require('fs');

// File path provided as first command line arg
const filepath = process.argv[2];

// Read the file asynchronously
fs,fs.readFile(filepath, 'utf8', function (err, data) {
    
    // Check if an error occurred while reading file
    if (err) {
        return console.error(err);
    }

    // Data is a string because we passed utf8
    const lines = data.split('\n');

    // Number of newlines is n-1
    console.log(lines.length -1);


});