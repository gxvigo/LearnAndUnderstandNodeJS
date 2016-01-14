var greet = function() {
    console.log('Hi, I am a function exposed by a module');
}

module.exports = greet;

// In this case (opposed from 'greet.js'), I want to make a function
// fron this module available in the app.js importing this module

// This module can be imported (require) in another js app and its export
// can be accessed
// Below how to import and use the export of this module from another js app:

/// var greet2 = require('./greet2');   // in this case the module is not executed, but 
                                   // just assigned to a variable
/// greet2();  