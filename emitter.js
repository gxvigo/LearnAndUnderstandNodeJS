// same logic as Event Emitter in Node
// ...just simpler

// Note that this is a function Constructor!
function Emitter() {
    // empty object to store all events
    this.events = {};
 }
 
 /**  Event Listener (on)
 type: the name or kind of event (eg: rain)
 listener: the function associate to the listener
  A type can have many listener associated ([])
 */
 Emitter.prototype.on = function(type, listner) {
     // if 'this.event[type] object doesn't exist (yet)
     // create it, as array to host all the listners
     this.events[type] = this.events[type] || [];
     // add the listener function to the events[type] 
     // array just created
     this.events[type].push(listner); 
 }
 
 Emitter.prototype.emit = function(type) {
     if(this.events[type]) {
         // if the event type exist, fire (execute)
         // all the listeners registered in '.on'
         this.events[type].forEach(function(listener) {
             listener('Wellington');
         })
     }
 }
 
 module.exports = Emitter;