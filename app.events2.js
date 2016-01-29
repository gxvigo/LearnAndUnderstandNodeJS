var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', function() {
   console.log('Someone said Hello'); 
});

emtr.on('greet', function() {
   console.log('An event \'greet\' has been emitted'); 
});

emtr.emit('greet');