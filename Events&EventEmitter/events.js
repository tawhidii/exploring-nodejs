const EventEmitter = require('events');
const event = new EventEmitter();

// Register a listener
event.on('complete',function(arg){
    console.log('Download completed !!',arg)
})
// Raise an event with event argument 
event.emit('complete',{id:1,data:'file://'});


// Ex:

event.on('logging',function(arg){
    console.log(arg.data)
})

event.emit('logging',{data:'Logging'})