var http=requrie("http");
console.log("http server created");
var server=http.createServer(function(req,res){
var index=path.join(__dirname,'number.html');
var function=path.join(__dirname,'function.html');
if(req.url=='/'(){
fs.readFile('index',function(err,data){
	if(err){
		console.log(err);
		res.writeHead(500,'content-type':'text/html')

	}});
res.end("500 internal server");
}else {
	res.writeHead(500,'content-type':'text/html')});
	res.end(data);}
});
})


}
	
});
server.listen(8888);