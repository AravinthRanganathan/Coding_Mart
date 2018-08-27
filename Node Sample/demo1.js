var h=require("http");
h.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/plain'});
	// response.send
	// response.replay
	response.end("Hello This is Aravinth's PC");
}).listen(8081);