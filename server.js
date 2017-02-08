console.log('index.js started at '+Date());

var http = require('http');
var fs = require('fs');
// make sure config directory is set
if(fs.readdirSync('./').indexOf('config')==-1){
    fs.mkdirSync('config')
    fs.mkdirSync('config/config')
}
const PORT= process.env.PORT || 8080;
function handleRequest(request, response){
   if(request.url!=='/favicon.ico'){
       var res='{"Hello": "hi Stony Brook at '+Date()+' Path Hit: ' + request.url + '"}'
       if(request.url.length>1){
           var cloud = request.url.slice(1).replace(/\?.*/,'')
           console.log('cloud: '+cloud)
           // make sure the directory exists
           if(fs.readdirSync('./config').indexOf(cloud)==-1){
               //res='redcloud "'+cloud+'" not found, do you want to create it?<p>yes</p>'
           }

       }
       4
       response.end(res);
   }else{
       response.end(''); //favicon being requested
   }
}
var server = http.createServer(handleRequest);
server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});
