const EventEmitter = require('events');
const event = new EventEmitter();
class Logger extends EventEmitter{
    log(eventName){
        this.emit(eventName,{'message':'Logging Successful !'})
    }
}

module.exports = Logger;
