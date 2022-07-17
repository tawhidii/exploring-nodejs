const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('Hello world from node js ...');
        res.end()
    }
    if(req.url === '/api/posts'){
        res.write(JSON.stringify([
            {id:1,title:'Hello world !!'},
            {id:2,title:'Bye world !!'},
            {id:3,title:'This is title'}
        ]))
        res.end()
    }
});





// server.on('connection',()=>{
//     console.log('Successfully connected !');
// })

server.listen(3000);
console.log('Listening to port 3000....');