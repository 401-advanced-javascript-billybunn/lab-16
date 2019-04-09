'use strict';

module.exports = exports = {};
// console.log('in fs.js');

exports.readFile = (file, cb) => {
  // console.log('file', file);
  if( file.match(/bad/i) ) {
    cb('Invalid File');
  }
  else {
    cb(undefined, new Buffer('File Contents'));
  }
};

exports.writeFile = (file, data, cb) => {
  if( file.match(/bad/i) ) {
    cb('Invalid File');
  }
  else {
    cb(undefined, new Buffer('File Contents'));
  }

  // if( file.match(/bad/i) ) {
  //   cb('Invalid File');
  // }
  // else {
  //   cb(undefined, new Buffer('File Contents'));
  // }
};

