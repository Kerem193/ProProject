/**Datei: server.js
 * Beschreibung: Beinhaltet Routing und Datenbankverbindungen
 * Hinweis: 
 * Entwickler: Engin Aslan, Kerem Uyanik
 * Version : 1.0 Prototyp
 * Version : 1.1 Projekt anlegen
 */

//Impoertieren von Klassen
var projektmanager = require("./Server/Projektmanager.js");
var forecastmanager = require("./Server/Forecastmanager.js");
var kundenprojektmanager = require("./Server/Kundenprojektmanager.js");
var personalplanmanager = require("./Server/Personalplanmanager.js");
var teamverfuegbarkeitmanager = require("./Server/Teamverfuegbarkeitmanager.js");
var terminmanager = require("./Server/Terminmanager.js");






//Datenbank
var mysql=require('mysql');
var conn = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password:'',
    database : 'test' 
});
//Datenbank Ende


//Server Einstellungen
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
//Server Einstellungen Ende

//var nodeJsRender = require('node-jsrender');
//nodeJsRender.express('html', app);
//app.set('view engine', 'jade');


//Frontend Veröffentlichen
app.use(express.static(__dirname + '/app/views'));
app.use(express.static(__dirname + '/app/views/html'));
//Frontend Veröffentlichen Ende
app.use(bodyParser.json())


//Pfad für HTML render
var pfad= __dirname + '/app/views/html';



//GET URL REST
app.get('/', function(req, res){
    res.render('index');
 });



app.get('/projekt', function(req, res){
    res.sendFile(pfad+'/projektanlegenproto.html');
 });







app.get('/main', function(req, res){
//res.render('index');
 });


app.get('/kunden:userid', function(req, res){
res.render('index');
 });
app.get('/teamverfügbarkeit:userid', function(req, res){
//res.render('index');
 });

app.get('/eigenePlanung:userid', function(req, res){
//res.render('index');
 });

app.get('/forecast:userid', function(req, res){
//res.render('index');
 });








//Post URL Rest
app.post('/login', function(req, res){
//res.render('index');
 });
app.post('/projekt', function(req, res){
    //Entpacken der JSON
    projektname=req.body.projektname;
    wahrscheinlichkeit= req.body.wahrscheinlichkeit;
    tagessatz= req.body.tagessatz;
    ansprechpartner= req.body.ansprechpartner;
    aufgabe= req.body.aufgabe;
   
    //Aufruf des Modells
    projektmanager.projektanlegen(conn,projektname,wahrscheinlichkeit,tagessatz,ansprechpartner,aufgabe);
    
    
    
    
 });
app.post('/kunden', function(req, res){
//res.render('index');
 });
app.post('/eigenePlanung', function(req, res){
//res.render('index');
 });

//Delete URL Rest

app.delete('/projekt', function(req, res){
//res.render('index');
 });







app.listen(8080, function(){

console.log("ProProjct läuft auf 8080");

});


