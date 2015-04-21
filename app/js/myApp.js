/**
 * 
 */

"use strict";

var myApp = angular.module('myApp', []);

myApp.controller('appCtrl', function($scope){
	$scope.xyz = "Hello World";
	$scope.test="Daten 3"
		
		
		//ruf server auf
});

/*myApp.controller('tableCtrl', function($scope) {
	var consultants;
	$.ajax({
		url: "http://services.odata.org/V4/Northwind/Northwind.svc/Employees",
		async: false,
		dataType: "json"
	}).done(function(data){
		$scope.consultants = data.value;
	});*/

/*myApp.controller('tableCtrl', function($scope, $http) {
	$http.get("http://services.odata.org/V4/Northwind/Northwind.svc/Employees").then(function(data){
		$scope.consultants = data.data.value;
	});
});*/

myApp.controller('serverCtrl', function($scope, $http) {
	$http.get("/hallo").then(function(data){
        
            });

});

