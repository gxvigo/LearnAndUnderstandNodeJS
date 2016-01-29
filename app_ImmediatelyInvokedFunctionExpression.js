// Immidiately Invoked Function Expression (IIFE)
// functions that are executed right after the definition

var firstName = 'Mario';
var lastName =  'Vigorelli';

// IIFE are anonymous function wrapped around '(function().... {})'  to make them
// statements, and automatically invoked '(function().... {}())'
(function (lastName){  
    var firstName = 'Giovanni'; // this variable is valid just within
                                // the scope of this function
    console.log('Hello ' + firstName + ' ' + lastName);  // -> Hello, Giovanni Vigorelli
}(lastName));

console.log('Hello ' + firstName + ' ' + lastName);  // -> Hello, Mario Vigorelli