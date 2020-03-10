const http = require('http')
const server = http.createServer((req,res) =>{
    if(req.url === '/about')
        res.end('The about page')
    else if(req.url ==='/contact')
        res.end('The contact page')
    else if(req.url === '/')
        res.end('The home page')
    else {
        res.writeHead(404)
        res.end('page not found')
    }
console.log(req.url
    res.end('Hello Node.js')
})

server.listen(3000)

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/my_database',{useNewUrlParser:true}
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
    title: String,
    body: String
});