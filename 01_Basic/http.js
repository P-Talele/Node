const http=require('http');

http.createServer((req, res)=>{
     
         res.write("<h1>First Server SIde Function</h1>");
         res.end();

}).listen(1000) 