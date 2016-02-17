'use strict';

var EventEmitter = require('events');

class Greeter extends EventEmitter{
    constructor() {
        super();
        this.greeting  = 'Hello world! ';
    }
    
    greet(data) {
        // use 'template literals'
        console.log(`${this.greeting}: ${data}`); 
    }
}


var greeter1 = new Greeter();

greeter1.on('greet', function(data) {
   console.log('Someone greeted ' + data); 
});

greeter1.greet('Giovanni');
greeter1.emit('greet', 'Giovanni');
