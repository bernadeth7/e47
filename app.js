var http = require('http');
var fs = require('fs');
// http module:
var server = http.createServer(function (request, response){
    console.log('client request URL: ', request.url);
    // routing
    if(request.url === '/kodego') {
        fs.readFile('kodego.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }else if(request.url === '/kodego.png') {
        fs.readFile('kodego.png', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/png'});
            response.write(contents);
            response.end();
        });
    }
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});

server.listen(6543);
console.log("Running in localhost at port 6543");


































































// const http =  require('http');
// const fs = require('fs');
// http.createServer(function(req, res){
//     fs.readFile('./public/index.html',function(err, data){
//         res.writeHead(200, {'Content-Type' : 'text/html'});
//         res.write(data);
//         return res.end();
//     });
// }).listen(3000, '127.0.0.1');
// console.log("Server listening at port 3000");
