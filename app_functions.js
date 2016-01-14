var a = 1;
var b = 2;
var c = a + b;

console.log(c);

// FUNCTIONS

// function statement
function greet() {
    console.log("Hi");
}
greet();

// function first-class
// -- functions are ojects, so I can pass them as object (no '()') to other fuctions
function logGreetings(fn) {
    fn();
}
logGreetings(greet);

// function expression
var newGreet = function() {
    console.log("Hi, I am a function expression");
}
newGreet();
// -- it's still a first-class, so I can pass as object
logGreetings(newGreet);

// use a function expression on the fly
logGreetings(function() {
   console.log('Hi, I am a function expression built on the fly'); 
});