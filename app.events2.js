var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('rain', function() {  
    console.log('Don\'t water the garden');
});

emtr.on('rain', function(city) {
    if(city == "Wellington") {
        console.log('You are in ' + city +
         ' throw the umbrella in the bin!');
    } else {
        console.log('Open the umbrella!');
    }
});

emtr.emit('rain');