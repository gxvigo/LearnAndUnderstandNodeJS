// index.js is the default file looked up by
// node when a directory is passed to a require function
//
// node automatically append '.js' (if path not a directory)
var greetEn = require('./english');
var greetIt = require('./italian.js');

// a module exports can be an object, this way multiple
// functions are exported
module.exports = {
    english: greetEn, //greet() from greetEn object
    italian: greetIt  //greet() from greetIt object
};