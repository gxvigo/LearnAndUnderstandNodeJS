console.log('Hello, I am a module');

function greet() {
    console.log('Hello, I\'m a function in a module');
}
greet();

// this module can be imported from other js app:
/// require('./greet.js');   // require invoke (execute) the code from the passed file

// The module is self contained, none of the variables (and functions)
// defined in this module, collide with variable or function defined 
// in the module that 'requires' this module