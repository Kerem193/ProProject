var express = require('express');
var path = require('path');
var app = express();

//var nodeJsRender = require('node-jsrender');
//nodeJsRender.express('html', app);
//app.set('view engine', 'html');

app.use(express.static(__dirname + '/app/views'));
app.use(express.static(__dirname + '/app/views/html'));

app.get('/', function(req, res){

    res.render('index');

 });

//Hier URL Pattern
app.get('/', function(req, res){
//res.render('index');
 });
app.get('/a', function(req, res){
//res.render('index');
 });
app.get('/b', function(req, res){
res.render('index');
 });
app.get('/c', function(req, res){
//res.render('index');
 });


//Hier Request
app.get('/d', function(req, res){
console.log("Hey request erfolgreich");
    
    var jsondata= {
    "value": [
    {
    "name": "Max",
    "Nachname": "Mustermann"
    }
 
 ]
};
    
    res.send(jsondata);
    
    

});
app.get('/d', function(req, res){
//res.render('index');
 });
app.get('/e', function(req, res){
//res.render('index');
 });
app.get('/f', function(req, res){
//res.render('index');
 });


app.listen(8080, function(){

console.log("Läuft auf Port 8080");

});


