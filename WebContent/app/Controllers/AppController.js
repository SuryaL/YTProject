(function(){

	var app = angular.module("YTapp");
	
	var AppController = function($scope,$controller,navigateTabs){
		$scope.useful = {};
		$scope.list={};


		$scope.closeUser = function(username){

			navigateTabs.redirect($scope.list,username);
			delete $scope.list[username];
			$scope.$apply();			
		}
	
		// var UC = $controller("UserController");

		$scope.isActive= function(datalist)
		{
			return datalist === $scope.useful.currentUsername
		}


	};
	
	app.controller("AppController",AppController);
	
}());
