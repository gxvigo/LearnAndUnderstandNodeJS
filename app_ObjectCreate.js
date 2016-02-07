var person = {
    firstname: '',
    lastname: '',
    kind_of: 'human being',
    greetings: function() {
        console.log(this.firstname + 
        ' ' + this.lastname +
        ' is a ' + this.kind_of);
    }
}

var giovanni = Object.create(person);
giovanni.firstname = 'giovanni' // override the one in the prototype
giovanni.lastname = 'vigorelli' // same as above

giovanni.greetings();