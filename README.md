![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

<!-- LINKS -->
<!-- Replace the link for each in brackets below -->
<!-- PR (working into submission) -->
[1]: https://github.com/401-advanced-javascript-billybunn/lab-16/pull/1
<!-- travis build -->
[2]: https://travis-ci.com/401-advanced-javascript-billybunn/lab-16/builds/107566238
<!-- back-end -->
[3]: http://xyz.com
<!-- front-end -->
[4]: http://xyz.com
<!-- swagger -->
[5]: http://xyz.com
<!-- jsdoc-->
[6]: heroku-link/docs 

## Event Driven Applications
[![Build Status](https://travis-ci.com/401-advanced-javascript-billybunn/lab-16.svg?branch=master)](https://travis-ci.com/401-advanced-javascript-billybunn/lab-16)
### Author: Billy Bunn

### Links and Resources
* [PR][1]
* [travis][2]
<!-- (when applicable) -->
<!-- * [back-end][3] -->
<!-- (when applicable) -->
<!-- * [front-end][4] -->

<!-- #### Documentation -->
<!-- API assignments only -->
<!-- * [swagger][5] -->
<!-- (All assignments) -->
<!-- * [jsdoc][6] -->

### Modules
#### `app.js`
##### Exported Values and Methods

###### `alterFile(file)`
Calls a series of functions to read a file, convert the content to all uppercase characters, and re-write the file with the new content. Emits an event upon completing the process or a different event if an error occurs.

###### `read(file) -> fs.readFile(file) as Promise`
Calls the promisify-ed `fs.readFile` function. Takes a filepath to read as a parameter, ultimately returns a buffer of the data in that file.

###### `uppercase(data) -> Buffer of data in uppercase characters`
Takes buffer data as a parameter, returns a buffer of the same content in uppercase characters.

###### `write(file, contents) -> fs.writeFile(file, contents) as Promise`
Calls the promisify-ed `fs.writeFile` function. Takes a filepath and buffer data as parameters, ultimately writes new file with the filepath of `file` with the `contents`.

### Modules
#### `logger.js`
##### Exported Values and Methods

###### `handleCompleted(file) -> logs message to the console`
Fired on the `completed` event. Logs the new file's name in a message to the console.

###### `handleError(err) -> logs error to the console`
Fired on the `file-error` event. Logs the error in a message to the console.

### Modules
#### `event-pool.js`
##### Exported Values and Methods

###### `EventEmitter`
Built-in Node class to _“emit named events that cause Function objects ("listeners") to be called.”_ Exports the "event pool" that's required by all other modules that "emit" and "listen" to events (`app.js` and `logger.js`).
- Source: [Node.js documentation on Events](https://nodejs.org/api/events.html#events_class_eventemitter)

### Setup
<!-- #### `.env` requirements -->
* `npm i` - install dependencies
<!-- * `PORT` - assign a port number -->
<!-- * `MONGODB_URI` - URL to the running mongo instance/db -->


#### Running the app
<!-- * `npm start` -->
* `npm node app.js dummy.txt`

<!-- * Endpoint: `/` -->
<!-- * Endpoint: `/foo/bar/` -->
  <!-- * Returns a JSON object with abc in it. -->
<!-- * Endpoint: `/bing/zing/` -->
  <!-- * Returns a JSON object with xyz in it. -->
  
#### Tests
* To run tests, enter the following in the CLI:
  * `npm run test`
  * `npm run lint`
<!-- * What assertions were made? -->
<!-- * What assertions need to be / should be made? -->

#### UML
_Completed in collaboration with classmate Chris Merrit_
![UML Diagram](https://i.imgur.com/rMEDBls.jpg)
