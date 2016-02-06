(function(){

	var app = angular.module("YTapp");
	
	var AppController = function($scope,navigateTabs){
		
		$scope.list={};

		$scope.closeUser = function(username){
			navigateTabs.redirect($scope.list,username);
			delete $scope.list[username];
			$scope.$apply();			
		}

	};
	
	app.controller("AppController",AppController);
	
}());
