// primitives are passed by value (copy)
// objects are passed by reference

// pass by value (copy)
function changeC(b) {
    b = 2;
}
var a = 1;
changeC(a);
console.log(a); // -> 1

// pass by reference
function changeR(b){
    b.num = 2;
} 

var c = { num: 1};
changeR(c);
console.log(JSON.stringify(c));