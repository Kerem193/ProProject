var Router = require('router');

var router = new Router();


router.get('/', function(req, res){

console.log("Auftuf der root");


 });


var server = http.createServer(function(req, res) {
    router(req,res);
});

server.listen(8080);