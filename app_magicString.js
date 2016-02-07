// 'magic string' is an extremely useful and common
// pattern for using string in node programming.
// especially team dev., events, using tools (IDE) to
// identify bugs

var eventsConfig = require('./config_magic_string.js').events;

console.log(eventsConfig.FIRE);

var Emitter = require('events');
var emtr = new Emitter();

emtr.on(eventsConfig.FIRE, function(){
   console.log('Escape!!! But no panik'); 
});

emtr.on(eventsConfig.FIRE, function(){
   console.log('I am on fire too!'); 
});

emtr.emit('fire');