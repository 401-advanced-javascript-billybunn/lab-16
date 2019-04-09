'use strict';

const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const events = require('./event-pool.js');
require('./logger.js');

const alterFile = (file) => {

  // Read the file from the file system
  read(file)
    .then(data => {
      // Convert it's contents to upper case
      let text = uppercase(data);
      // Write it back to the file system
      return write(file, text);
    })

    // Report back to the user (console.log) the status
    .then(() => events.emit('completed', file))

    // Any and all errors must be thrown
    .catch(error => events.emit('file-error', error));
};

let file = process.argv.slice(2).shift(); // e.g., node app.js dummy.txt

alterFile(file);

// Read in a file
function read(file) {
  return readFile(file);
}

// Uppercase it's contents (stringify the buffer, upper case it, re-buffer-ize it)
function uppercase(data) {
  return Buffer.from(data.toString().toUpperCase());
}

// Save back to the file
function write(file, contents) {
  return writeFile(file, contents);
}

module.exports = {read, uppercase, write};
