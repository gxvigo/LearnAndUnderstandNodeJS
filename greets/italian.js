// require can handel JSON files as well
// 'imported' as js object
var greetings = require('./greetings.json'); 


var greet = function() {
    // 'it' is a key of greetings object
    console.log(greetings.it);  // -> 'Ciao'
}

// export the function to be used by other js app/module
module.exports = greet;