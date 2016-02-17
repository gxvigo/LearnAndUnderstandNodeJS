'use strict'; // this required by ES6

// class replace the function Constructors
class Person {
    // constructor is used to accept parameters
    constructor(name, familyName) {
        // properties and functions here are added to
        // each new object created
        this.name = name;
        this.familyName = familyName;
    } // no comma here, this is not object literal
    
    // properties and functions here are added to the
    // prototype
    greet() {
        console.log('Hello ' + this.name + ' ' + this.familyName);
    }   
}

var person1 = new Person('giovanni', 'vigorelli');
person1.greet();