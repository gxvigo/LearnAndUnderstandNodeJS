// index.js is the default file looked up by
// node when a directory is passed to a require function
var greet = require('./greets');

greet.english(); // -> 'Hello'
greet.italian(); // -> 'Ciao'