
const fs = require('fs');
const path = require('path');


module.exports = function (dirName, extension, callback) {
  // Read directory asynchronously
  fs.readdir(dirName, function (err, files) {
    // If fs.readdir fails, pass the error to the callback
    if (err) {
      return callback(err);
    }

    // Filter files that match ".<extension>"
    const filtered = files.filter(function (file) {
      return path.extname(file) === '.' + extension;
    });

    // Success if first arg null (no error), second arg data (array)
    callback(null, filtered);
  });
};