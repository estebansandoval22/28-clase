"use strict";

var express = require("express");
var app = express();

app.get("/",function(reg,res){
	res.status(200);
	res.send("hello world");
});

var server = app.listen(process.env.PORT || "8080",function(){
	console.log("server listening on port" + server.address().port);
});