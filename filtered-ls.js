
const fs = require('fs');
const path = require('path');

// Directory path is the first command line arg
const dirPath = process.argv[2];

// File extension to filter by
const extension = process.argv[3];

// Read the dir asynchronously 
fs.readdir(dirPath, function (err, files) {
  // Error handler 
  if (err) {
    return console.error(err);
  }

  // Loop through each file in the dir.
  files.forEach(function (file) {
    // Check if the file has the right extension
    if (path.extname(file) === '.' + extension) {
      console.log(file);
    }
  });
});