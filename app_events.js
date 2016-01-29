// object properties and method

var obj = {
    greet: "Hello"
}

console.log(obj.greet);
console.log(obj['greet']);

var prop = 'greet';
console.log(obj[prop]);

// array and function 

var arr = [];

arr.push(function() {
   console.log('Hello 1'); 
});

arr.push(function() {
   console.log('Hello 2'); 
});

arr.push(function() {
  console.log('Hello 3');  
});

arr[0]();

arr.forEach(function(item) {
    item();
});
