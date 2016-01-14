// Object literals
// (object created separating value-pairs by commas
//  and surrounded by curly braces )

var car = { 
    make: 'fiat',
    model : '500'
};

var person = {
    firstName: 'Giovanni',
    lastName: 'Vigorelli',
    address: {
        street: 'Mt Eden Rd',
        city: 'Auckland'
    },
    // function in an object is called method
    greet: function(){
        console.log('Hello, ' + person.firstName + ' ' + person.lastName);
    }
};

// How to access object propeties and method
console.log('Car make :' + car.make);
console.log('Person first name ' + person.firstName);
var lastNameLiteral = 'lastName';
console.log('Person last name ' + person[lastNameLiteral]);
console.log('Person\'s city :' + person['address']['city']);
person.greet();