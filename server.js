/**
 * Created by Lee_G on 2016-09-08.
 */
    //link to the http library that ships with node
var http = require('http');

//launch the http server and send a reponse asynchrously
http.createServer(function(request, response)
{
    response.writeHead(200); //status okay
    response.end('First node page');
}).listen(3000);

console.log('Server running on port 3000');