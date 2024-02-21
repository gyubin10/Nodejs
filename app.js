const expess = require("express");
const app = expess();

app.listen(1000, function(){
    console.log("1000번 포트")
});

app.get("/index.html", function(req, res){
    res.sendfile('./index.html');
});

app.get("/html/home.html", function(req, res){
    res.sendfile('./main.html');
});