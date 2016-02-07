// Use Node.js events and util module
var EventEmitter = require('events');
var util = require('util');

// create a custom function Constructor
// with some propertis
function Greeter() {
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
