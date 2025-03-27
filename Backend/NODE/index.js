const http = require('http');
const express = require('express')
const handlerFunction2 = express()
function handlerFunction(req, res){
    console.log("incomming reqest");
    
    console.log(res.method);
    
    
    switch (req.method) {
        case 'GET':
                if (req.url==='/') return res.end("Homepage")
                
                if (req.url==='/contact-us') return res.end("Contact Us Page")
                if (req.url==='/about-us') return res.end("About Us Page")
               
            break;
        case 'POST':

        break;
        default:
            break;
    }
}

handlerFunction2.get('/', (req, res)=>{res.end("Homepage")})
handlerFunction2.get('/about-us', (req, res)=>{res.end("About Page")})
handlerFunction2.get('/contact-us', (req, res)=>{res.end("Contact Us Page")})


// const server = http.createServer(handlerFunction2);

handlerFunction2.listen(8000, function(){
    console.log("server started");
})

