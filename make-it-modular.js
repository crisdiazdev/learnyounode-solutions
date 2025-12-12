const mymodule = require('./mymodule');

// Inputs from command line
const dirName = process.argv[2];
const extension = process.argv[3];

// key detail ~ Don't change the extension string before passing to the module
mymodule(dirName, extension, function (err, list) {
  // If an error happens, print a message
  if (err) {
    return console.error('Error reading directory:', err.message);
  }

  // Print each matching file on its own line
  list.forEach(function (file) {
    console.log(file);
  });
});