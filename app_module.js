require('./greet.js');   // require invoke (execute) the code from the passed file

var greet2 = require('./greet2');   // in this case the module is not executed, but 
                                   // just assigned to a variable
                                   // .js can be omitted, node will look for that, or
                                   // a directory called greet2 with a index.js in it
greet2();                                 