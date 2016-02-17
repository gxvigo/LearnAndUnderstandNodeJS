var util = require('util');

function Person() {
    this.name = 'giovanni';
    this.familyName = 'vigorelli';
}

Person.prototype.greet = function() {
    console.log('Hello ' + this.name + ' ' + this.familyName);
}

var FireFighter = function() {
    this.badge = 'FF1001'
}

var PoliceOfficer = function() {
    Person.call(this);
    this.badge = 'PO1001';
}

util.inherits(FireFighter, Person);
var fireFighter1 = new FireFighter();
fireFighter1.greet();
console.log('Your badge id is: ' + fireFighter1.badge + ' \n');

util.inherits(PoliceOfficer, Person);
var policeOfficer1 = new PoliceOfficer();
policeOfficer1.greet();
console.log('Your badge id is: ' + policeOfficer1.badge);

