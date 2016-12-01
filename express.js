var express=requrie("express");
var app=express();
app.get('/login',function(req,res){
	if(req=='/'){
	res.send("the login is succesfully");
	}lese
	res.send("express server");
});
app.listen(8090);