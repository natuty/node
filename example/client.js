var http = require("http");
var qs = require("querystring")
 
 
var options = {
    hostname: '127.0.0.1',
    port: 3000,
    path: '/',
    method: 'POST',
};
 
 
function getname(theName){
	var b = {name:theName};
	var a=qs.stringify(b)    
	console.log(typeof theName)    
	console.log("theName:"+theName+" ,b转换为string后的a:"+a);    
	http.request(options,function(response){        
		response.setEncoding('utf8');        
		var body ="";        
		response.on('data', function(chunk){            
			body+=chunk;        
		});        
		response.on('end',function (){            
			process.stdout.write("client compate!\n");        
		})    
	}).end(a);
}
 
//正确代码
process.stdin.on("data",function(inputData){
    process.stdout.write("your name:"+inputData);
    console.log("输入内容: "+inputData+" 转换为string后:"+inputData.toString().replace("\r\n",""))//inputData 有回车
    getname(inputData.toString().replace("\r\n",""));
})