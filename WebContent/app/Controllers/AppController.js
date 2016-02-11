(function(){

	var app = angular.module("YTapp");
	
	var AppController = function($scope){
		
		// useful.currentUsername holds the current username that is available to all scopes
		$scope.useful = {};
		
		// holds the list of all the users
		$scope.list={};

	};
	
	app.controller("AppController",AppController);
	
}());
