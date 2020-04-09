const http = require('http')
const server = http.createServer((req,res) =>{
    
server.listen(3000)

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/my_database',{useNewUrlParser:true}
