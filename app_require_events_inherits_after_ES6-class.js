'use strict';

var Greeter = require('./module_events_inherits_after_ES6-class');

var greet1 = new Greeter;
greet1.greet('giovanni');

greet1.on('greet', function() {
   console.log(`Hey Giovanni`); 
});

greet1.emit('greet');

