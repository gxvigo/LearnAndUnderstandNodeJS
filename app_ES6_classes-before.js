var Person = function(name, familyName) {
    this.name = name;
    this.familyName = familyName;
}

Person.prototype.greet = function() {
    console.log('Hello ' + this.name + ' ' + this.familyName);
}

var person1 = new Person('giovanni', 'vigorelli');
person1.greet();