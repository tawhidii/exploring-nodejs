const express = require('express');
const userRouter = require('../modules/users/users.routes');
module.exports = ()=>{
    const app = express();
    app.use(express.json());
    userRouter(app);
    return app
}