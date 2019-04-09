'use strict';

/*
Write tests around all of your units
  File Read, File Save, Uppercase
  Mock the fs module methods so that your tests don't use actual files
Test event handlers (not events themselves)
Use spies to help testing your logger methods (assert that console.log was called right)
*/

const faker = require('faker');
jest.mock('fs');
const read = require('../app.js').read;
const uppercase = require('../app.js').uppercase;
const write = require('../app.js').write;


describe('app.js', () => {

  it('read() - when given a bad file, returns an error', () => {
    let file = 'bad.txt';
    return read(file)
      .then(success => {
        expect(success).toBeFalsy();
      })
      .catch(err => {
        expect(err).toBeDefined();
      });
  });

  it('read() - can read a file', () => {
    let file = 'file.txt';

    return read(file)
      .then(success => {
        expect(success).toBeDefined();
      })
      .catch(err => {
        expect(err).toBe('boom');
      });
  });

  it('read() - resolves when given a good file', () => {
    let file = 'file.txt';
    return expect(read(file)).resolves.toEqual(new Buffer('File Contents'));
  });

  it('read() - rejects when given a bad file', () => {
    let file = 'bad.txt';
    return expect(read(file)).rejects.toEqual('Invalid File');
  });

  it('uppercase() - can uppercase buffer data', () => {
    let data = Buffer.from(faker.random.word());
    expect(uppercase(data)).toEqual(Buffer.from(data.toString().toUpperCase()));
  });




  it('write() - when given a bad file, returns an error', () => {
    let file = 'bad.txt';
    return write(file)
      .then(success => {
        expect(success).toBeFalsy();
      })
      .catch(err => {
        expect(err).toBeDefined();
      });
  });

  xit('write() - when given bad data to write, returns an error', () => {
    expect(true).toBeTruthy();
    
  });

  xit('write() - can write a file', () => {
    expect(true).toBeTruthy();
  });


});

describe('logger.js', () => {
  xit('can log on completion', () => {
    expect(true).toBeTruthy();
  });

  xit('can log and throw an error', () => {
    expect(true).toBeTruthy();
  });
});
