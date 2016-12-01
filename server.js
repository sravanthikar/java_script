var http = require('http');
console.log("http-->",http);
var server=http.createServer(function (req,res){
		res.write("thisis HTTP server");
	res.end();
	
});
server.listen(8090);