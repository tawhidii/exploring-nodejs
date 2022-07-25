// Example of application level middleware..
const loggerMiddleware = (req,res,next) => {
    console.log(`${req.url} -${new Date().toLocaleDateString()} - ${req.method} - ${req.ip}`);
    next();
}
module.exports = loggerMiddleware;