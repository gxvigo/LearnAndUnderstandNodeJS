// Function constructor (conventionally written with capital letter)
var Person = function(firstName, familyName) {
    this.firstName = firstName;
    this.familyName = familyName;
    
    // this function will be created in every instance of Person object.
    this.jump = function() {
        console.log(this.firstName + ' jumped!');
    }
}

// creates a new object (instance) based of Person, it calls Person constructor
var giovanniPerson = new Person('Giovanni', 'Vigorelli');

giovanniPerson.jump = function() {
    console.log(this.firstName + ' overriden jump...');
}

console.log('Hello, ' + giovanniPerson.firstName + ' ' 
        + giovanniPerson['familyName']); // -> Hello, Giovanni Vigorelli
giovanniPerson.jump(); // -> Giovanni jumped! 

// prototype is 'pointed' by any object created from Person constructor
// so, all Person instances will link to this function (no copy)
Person.prototype.greet = function() {
    console.log('Hello, ' + this.firstName);
}

var marioPerson = new Person('Mario', 'Vigorelli');
var barbaraPerson = new Person('Barbara', 'Barlocco');

marioPerson.greet(); // -> Hello, Mario
console.log(marioPerson.firstName); // -> Mario
marioPerson.jump(); // -> Mario jumped!
barbaraPerson.greet(); // -> Hello, Barbara

console.log(marioPerson.__proto__); //-> { greet: [Function] }
console.log(marioPerson.__proto__ === barbaraPerson.__proto__); // -> true