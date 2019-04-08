'use strict';
/*
Refactor the provided application using best practices for modularization, asynchronous file access, and test-ability.

TODO:
Separate the functionality of that big callback into it's parts, so that you can run them independently as well as test.
  Read in a file
  Uppercase it's contents (stringify the buffer, upper case it, re-buffer-ize it)
  Save back to the file.
*/

const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const events = require('./event-pool.js');
require('./logger.js');

const alterFile = (file) => {
  // Read the file from the file system
  readFile(file)
    .then(data => {

      // Convert it's contents to upper case
      let text = data.toString().toUpperCase();

      // Write it back to the file system
      return writeFile(file, Buffer.from(text));
    })

    // Report back to the user (console.log) the status
    .then(() => events.emit('completed', file))

    // Any and all errors must be thrown
    .catch(error => events.emit('file-error', error));
};

// Example CLI input: node app.js dummy.txt
let file = process.argv.slice(2).shift();

alterFile(file);

/*
// Starter code
const alterFile = (file) => {
  fs.readFile(file, (err, data) => {
    if (err) { throw err; }
    let text = data.toString().toUpperCase();
    fs.writeFile(file, Buffer.from(text), (err, data) => {
      if (err) { throw err; }
      console.log(`${file} saved`);
    });
  });
};
*/