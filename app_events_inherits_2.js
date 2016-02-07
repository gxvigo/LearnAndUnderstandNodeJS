// Use Node.js events and util module
var EventEmitter = require('events');
var util = require('util');

// create a custom function Constructor
// with some propertis
function Greeter() {
    // Next instruction is fundamental to have all
    // properties of the 'parent' object inheited by
    // the Greeter object
    //
    // Instead of creting a new object EventEmitter 
    // (new keyword), I call the function constructor
    // passing the 'this' object of Greeter.
    // Because objects are passed by reference, the 'this'
    // of EventEmitter is overriden with the this of Greeter
    // so Greeter now has all the properties and function
    // of EventEmitter (even outside prototype) 
    EventEmitter.call(this);
    this.greeting  = 'Hello world! ';
}

// Link the EventEmitter.prototype to my custom
// Constructor. Now Greeter has access to properties
// and methods of EventEmitter (on, emit, etc)
util.inherits(Greeter, EventEmitter);

// Add a method to the custom constructor prototype
Greeter.prototype.greet = function(data) {
    console.log(this.greeting + data);
    // I can here use 'emit' from EventEmitter
    // this.emit('greet', data);
}

// Create a new object from my custom Constructor
var greeter1 = new Greeter();

// the new object has access to EventEmitter.prototype methods
greeter1.on('greet', function(data) {
   console.log('Someone greeted ' + data); 
});

// and it's own methods and properties
greeter1.greet('Giovanni');
greeter1.emit('greet', 'Giovanni');
