const { getUsers } = require('./users.controller');
const { createUser } = require('./users.controller');

module.exports = (app) => {   
    app.get('/users',getUsers);
    app.post('/users',createUser)
}