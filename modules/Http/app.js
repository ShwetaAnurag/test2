const http = require('http')

const server = http.createServer((req,res)=>{
    
    if(req.url==='/'){
    res.end(`<h1>welcome to home page</h1>`);
    }

    if(req.url==='/about'){
        res.end(`<h1>This is about page</h1>`);
    }

    res.end(
       `
        <h1>Opss !!!</h1>
        </div><p>plz go bacl</p>
        <a href="/">here</a>
   `
    
    );
     
    
});

server.listen(5000);