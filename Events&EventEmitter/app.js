const Logger = require('./logger');

const logger = new Logger();

logger.on('logging',(args)=>{
    console.log('Logging done',args);
})

logger.log('logging')