/**Datei: projekt.js
 * Beschreibung:
 * Hinweis: 
 * Entwickler: Engin Aslan, Kerem Uyanik
 * Version : 
 */

//global
var host="http://"+ window.location.host;

var projekt = angular.module('projekt', []);


projekt.controller('projektanlegenCtrl', function($scope, $http) {
    $scope.klick=function(){
  
    projektname=this.projektname;
    wahrscheinlichkeit= this.wahrscheinlichkeit;
    tagessatz= this.tagessatz;
    ansprechpartner= this.ansprechpartner;
    aufgabe= this.aufgabe;

                
    var url= host + "/projekt";
    var json = {};
    json["projektname"] = projektname;
    json["wahrscheinlichkeit"] = wahrscheinlichkeit;
    json["tagessatz"] = tagessatz;
    json["ansprechpartner"] = ansprechpartner;
    json["aufgabe"] = aufgabe;

    
    $http.post(url, json).then(function(data){
        
        }); 
        
        
    }
   
   

});

