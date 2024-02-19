const http=require('http');
const data=require('./02_Data');
http.createServer((req, res)=>{
     res.writeHead(200,{'content-type':'Application\JSON'})
     res.write(JSON.stringify(data))
     res.end()  
      }).listen(3030);