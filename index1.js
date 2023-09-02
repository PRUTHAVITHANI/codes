const http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application\json'});
    res.write(JSON.stringify({name:'Mahee Gadhiya', email : 'maheegadhiya2003@gmail.com'}));
    res.end();
}).listen(3200);