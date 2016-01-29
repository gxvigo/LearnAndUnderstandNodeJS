// require can handel JSON files as well
// 'imported' as js object
var greetings = require('./greetings.json'); 


var greet = function() {
    // 'en' is a key of greetings object
    console.log(greetings.en);  // -> 'Hello'
}

// export the function to be used by other js app/module
module.exports = greet;