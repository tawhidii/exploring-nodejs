const logger = require('./logger.js');
const path = require('path');

const pathObject = path.parse(__filename);

console.log(pathObject);

logger.log('hello')

console.log(parseInt(0.0000005))