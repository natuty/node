const http = require("http");
const qs = require("querystring")
 
http.createServer(function(request,response){
    var body ="";
    request.on("data",function(chunk){
        body+=chunk;
    })
    request.on("end",function(){
        response.writeHead(200,{"ContentType":"text/html;charset=utf-8"});
        console.log(body)
        process.stdout.write("got name :"+ qs.parse(body)["name"]+"\n")
    })
 
 
}).listen(3000);