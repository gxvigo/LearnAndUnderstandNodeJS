// Buffer is so importan that Node made this available
// as Global object, so it's not necessary to 'require' the
// Buffer module

var bfr = new Buffer('Hello', 'UTF-8'); // I could have specified a size but for 
                                        // this exmaple I am giving a value.
                                        // I could have avoided 'UTF-8' as
                                        // it's the default
                                        
console.log(bfr);  // -> <Buffer 48 65 6c 6c 6f>
console.log(bfr.toString()); // -> Hello
console.log(bfr.toJSON()); // { type: 'Buffer', data: [ 72, 101, 108, 108, 111 ] }
console.log(bfr[0]); // -> 72

bfr.write('giovanni');  // I can write (or update) a buffer
console.log(bfr.toString()); // -> giolo - buffer is finite and replace the content 

bfr.write('giovanni');
console.log(bfr.toString()); // -> giova - buffer size has been set on creation