function Person() {
    this.name = 'giovanni';
    this.familyName = 'vigorelli';
}

Person.prototype.greet = function() {
    console.log('Hello ' + this.name + ' ' + this.familyName);
}

var person1 = new Person();

person1.greet(); 