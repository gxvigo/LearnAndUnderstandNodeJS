var Emitter = require('./emitter');
//  the following line loads the default (better!)
//  Node.js events module. Still the logig below works.   
///  var Emitter = require('events');

// create a new object from the Emitter constructor
// the new object has access to Emitter prototype (on, emit)
var emtr = new Emitter();

// funtion 'on' from Emitter prototype
// Invoke 'on' passing 'rain' as type and
// a function as listener
emtr.on('rain', function() {  
    console.log('Don\'t water the garden');
});

// same as above
emtr.on('rain', function(city) {
    if(city == "Wellington") {
        console.log('You are in ' + city +
         ' throw the umbrella in the bin!');
    } else {
        console.log('Open the umbrella!');
    }
});

// funtion 'emit' from Emitter prototype
// Invoke 'emit' passing 'rain' as type.
// This execute all the listeners associated to this
// type
emtr.emit('rain');