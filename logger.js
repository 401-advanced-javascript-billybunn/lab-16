'use strict';

const events = require('./event-pool.js');

events.on('completed', handleCompleted);
events.on('file-error', handleError);

function handleCompleted(file) {
  console.log(`${file} saved`);
}

function handleError(err) {
  throw err;
}
