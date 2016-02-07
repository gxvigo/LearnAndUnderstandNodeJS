var Emitter = {
    events: {
        "event1": [
            function(){},
            function(){},
            function(){}
        ],
        "event2": [
            function(){},
            function(){},
            function(){} 
        ]
    },
    
    on: function(type, listner){
        // add objects (event type and 
        // listener to the 'events' object
    },
    
    emit: function(type){
        // invoke all listener of a give event
    }
};
