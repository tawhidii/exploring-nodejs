
const express= require('express');
const morgan = require('morgan');
const config = require('config');
const debug = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const Joi = require('joi');
const logger = require('./logger');
const app = express();

app.use(express.json());

const movies = [
    {id:1,title:'Iron man',releaseYear:2008},
    {id:2,title:'Spider man',releaseYear:2010},
    {id:3,title:'Super man',releaseYear:2011},
    {id:4,title:'Bat man',releaseYear:2012},
    {id:5,title:'Ant man',releaseYear:2013},
    {id:6,title:'Aqua man',releaseYear:2014},
]

console.log('Application Name: ',config.get('name'));
console.log('Application Mail Server:',config.get('mail.server'));
console.log('Mail Server Password:',config.get('mail.password'));



// custom middleware 
// app.use(logger);
// thrid party middleware 
if((app.get('env')==='development')){
    app.use(morgan('tiny'));
    // debugger 
    debug('Morgan is enabled and running !!')
}




app.get('/',(req,res)=>{
    res.send('Hello from home ');
})

// Get all movies 
app.get('/movies',(req,res)=>{
    res.send(movies);
})
// Post a movie 
app.post('/movies',(req,res)=>{
    const schema = Joi.object({
        title:Joi.string().min(3).required(),
        releaseYear: Joi.number().required()
    });
    const result = schema.validate(req.body);
    if(result.error){
        res.status(400).send({'error':result.error.details[0].message});
    }else{
        const movie = {
            id:movies.length + 1,
            title:req.body.title,
            releaseYear:req.body.releaseYear
        }
        movies.push(movie);
        res.send({message:'movies posted successfully',data:movie})
    }    
})
// Get a single movie
app.get('/movies/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const movieObject = movies.find(movie=> movie.id === id);
    res.send(movieObject ? movieObject : {'error':`No movie found with id ${id} !!`})
    
})
// update a single movie
app.put('/movies/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const title = req.body.title;
    const releaseYear = req.body.releaseYear;
    const movieObject = movies.find(movie=>movie.id === id);
    console.log(movieObject);
    movieObject.title = title ? title : res.status(400).send({'error':'Title can not be empty'});
    movieObject.releaseYear = releaseYear ? releaseYear : res.status(400).send({'error':'Release year can not be empty.'});
    res.send({message:'Updated Successfully',data:movieObject});
})


// delete a a single movie 
app.delete('/movies/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const movieObject = movies.find(movie=> movie.id===id);
    const movieObjectIndex = movieObject ? movies.indexOf(movieObject): res.send({'error':`No movie found with id ${id} !!`});
    movies.splice(movieObjectIndex,1);
    res.send({'message':'Successfully deleted !!'})
    
})



const port = 3000;
app.listen(port,()=>{
    console.log('Running at port %s...',port)
})