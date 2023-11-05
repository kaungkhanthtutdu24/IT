var http = require('http');

http.createServer((request,response)=>{
	response.writeHead(200,{'Content-Type': 'text/plain'})
	response.end('Hello world, This is my Node.js server\n');
	})
.listen(10000,()=>console.log('server started at port 10000'));