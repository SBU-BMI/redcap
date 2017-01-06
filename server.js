console.log('index.js started at '+Date());

var http = require('http');
const PORT= process.env.PORT || 8080;
function handleRequest(request, response){
    response.end('Hello '+process.env.hello+', at '+Date()+' Path Hit: ' + request.url);
}
var server = http.createServer(handleRequest);
server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});
