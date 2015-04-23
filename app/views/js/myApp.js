/**Datei: myApp.js
 * Beschreibung:
 * Hinweis: 
 * Entwickler: Engin Aslan, Kerem Uyanik
 * Version : 1.0 Prototyp
 */

//global
var host= window.location.host;



var myApp = angular.module('myApp', []);

myApp.controller('appCtrl', function($scope){
	$scope.xyz = "Hello World";
	$scope.test="Daten 3"
		
		
		//ruf server auf
});



/*myApp.controller('tableCtrl', function($scope, $http) {
	$http.get("http://services.odata.org/V4/Northwind/Northwind.svc/Employees").then(function(data){
		$scope.consultants = data.data.value;
	});
});*/


myApp.controller('serverCtrl', function($scope, $http) {
    $scope.klick=function(){
  
    vorname=this.vorname;
    nachname= this.nachname;
    projekt= this.projekt;
    url="http://"+ host + "/d?vorname=" + vorname +"&nachname=" + nachname + "&projekt=" + projekt;
    $http.get(url).then(function(data){
        
        var hinweis="Dies ist ein Hinweis! Sie haben diese Daten eingegeben";
        var vor ="Vorname "+data.data.vorname;
        var nach="Nachname " + data.data.nachname;
        $scope.vor=vor;
        $scope.nach=nach;   

        }); 
        
        
    }
   
   

});

