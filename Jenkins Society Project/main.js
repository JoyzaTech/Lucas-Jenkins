const http = require('http')
const fs = require('fs')

const server = http.createServer((request, response)=>{
    if(request.url === '/'){
        fs.readFile("./index.html",(error, data)=>{
            response.end(data)
        })
    }
    else if(request.url === "/about"){
        fs.readFile("./about.html",(error, data)=>{
            response.end(data)
        })
    }

    else if(request.url === "/challenge"){
        fs.readFile("./challenge.html",(error, data)=>{
            response.end(data)
        })
    }
    else if(request.url === "/div"){
        fs.readFile("./div.html",(error, data)=>{
            response.end(data)
        })
    }
    else if(request.url === "/hex"){
        fs.readFile("./hex.html",(error, data)=>{
            response.end(data)
        })
    }
    else if(request.url === "/blue"){
        fs.readFile("./blue.html",(error, data)=>{
            response.end(data)
        })
    }
    else if(request.url === "/arm"){
        fs.readFile("./arm.html",(error, data)=>{
            response.end(data)
        })
    }
    else if(request.url === "/nine" || request.url === "9"){
        fs.readFile("./nine.html",(error, data)=>{
            response.end(data)
        })
    }

    else if(request.url === "/aol"){
        fs.readFile("./aol.html",(error, data)=>{
            response.end(data)
        })
    }
    
})

server.listen(3000)